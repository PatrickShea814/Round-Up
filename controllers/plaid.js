(function ($) {
    var products = '<%= PLAID_PRODUCTS %>'.split(',');
    if (products.includes('assets')) {
        $('#assets').show();
    }

    var handler = Plaid.create({
        apiVersion: 'v2',
        clientName: 'Plaid Quickstart',
        env: '<%= PLAID_ENV %>',
        product: products,
        key: '<%= PLAID_PUBLIC_KEY %>',
        // webhook: 'https://your-domain.tld/plaid-webhook',
        onSuccess: function (public_token) {
            $.post('/get_access_token', {
                public_token: public_token
            }, function (data) {
                $('#container').fadeOut('fast', function () {
                    $('#item_id').text(data.item_id);
                    $('#access_token').text(data.access_token);
                    $('#intro').hide();
                    $('#app, #steps').fadeIn('slow');
                });
            });
        },
    });
    var accessToken = qs('access_token');
    if (accessToken != null && accessToken != '') {
        $.post('/set_access_token', {
            access_token: accessToken
        }, function (data) {
            $('#container').fadeOut('fast', function () {
                $('#item_id').text(data.item_id);
                $('#access_token').text(accessToken);
                $('#intro').hide();
                $('#app, #steps').fadeIn('slow');
            });
        });
    }

    // REUSE THIS BUTTON FOR USERS TO CONNECT OTHER ACCOUNTS
    $('#link-btn').on('click', function (e) {
        handler.open();
    });

    $('#get-accounts-btn').on('click', function (e) {
        $.get('/accounts', function (data) {
            $('#get-accounts-data').slideUp(function () {
                var html = '<tr><td><strong>Name</strong></td><td><strong>Balances</strong></td><td><strong>Subtype</strong></td><td><strong>Mask</strong></td></tr>';
                data.accounts.accounts.forEach(function (account, idx) {
                    html += '<tr>';
                    html += '<td>' + account.name + '</td>';
                    html += '<td>$' + (account.balances.available != null ? account.balances.available : account.balances.current) + '</td>';
                    html += '<td>' + account.subtype + '</td>';
                    html += '<td>' + account.mask + '</td>';
                    html += '</tr>';
                });

                $(this).html(html).slideDown();
            });
        });
    });

    $('#get-auth-btn').on('click', function (e) {
        $.get('/auth', function (data) {
            $('#get-auth-data').slideUp(function () {
                var authData = data.auth;
                var isAch = authData.numbers.ach.length > 0;
                var routingLabel = isAch ? 'Routing #' : 'Institution and Branch #';

                var html = '<tr><td><strong>Name</strong></td><td><strong>Balance</strong></td><td><strong>Account #</strong></td><td><strong>' + routingLabel + '</strong></td></tr>';
                if (isAch) {
                    authData.numbers.ach.forEach(function (achNumbers, idx) {
                        // Find the account associated with this set of account and routing numbers
                        var account = authData.accounts.filter(function (a) {
                            return a.account_id == achNumbers.account_id;
                        })[0];
                        html += '<tr>';
                        html += '<td>' + account.name + '</td>';
                        html += '<td>$' + (account.balances.available != null ? account.balances.available : account.balances.current) + '</td>';
                        html += '<td>' + achNumbers.account + '</td>';
                        html += '<td>' + achNumbers.routing + '</td>';
                        html += '</tr>';
                    });
                } else {
                    authData.numbers.eft.forEach(function (eftNumber, idx) {
                        // Find the account associated with this set of account and routing numbers
                        var account = authData.accounts.filter(function (a) {
                            return a.account_id == eftNumber.account_id;
                        })[0];
                        html += '<tr>';
                        html += '<td>' + account.name + '</td>';
                        html += '<td>$' + (account.balances.available != null ? account.balances.available : account.balances.current) + '</td>';
                        html += '<td>' + eftNumber.account + '</td>';
                        html += '<td>' + eftNumber.institution + ' ' + eftNumber.branch + '</td>';
                        html += '</tr>';
                    });
                }
                $(this).html(html).slideDown();
            });
        });
    });

    $('#get-identity-btn').on('click', function (e) {
        $.get('/identity', function (data) {
            $('#get-identity-data').slideUp(function () {
                var identityData = data.identity.identity;
                var html = '<tr className="response-row response-row--is-identity"><td><strong>Names</strong></td><td><strong>Emails</strong></td><td><strong>Phone numbers</strong></td><td><strong>Addresses</strong></td></tr><tr className="response-row response-row--is-identity">';
                html += '<td>';
                identityData.names.forEach(function (name, idx) {
                    html += name + '<br />';
                });
                html += '</td><td>';
                identityData.emails.forEach(function (email, idx) {
                    html += email.data + '<br />';
                });
                html += '</td><td>';
                identityData.phone_numbers.forEach(function (number, idx) {
                    html += number.data + '<br />';
                });
                html += '</td><td>';
                identityData.addresses.forEach(function (address, idx) {
                    html += address.data.street + '<br />';
                    html += address.data.city + ', ' + address.data.state + ' ' + address.data.zip;
                });
                html += '</td></tr>';

                $(this).html(html).slideDown();
            });
        });
    });

    $('#get-item-btn').on('click', function (e) {
        $.get('/item', function (data) {
            $('#get-item-data').slideUp(function () {
                if (data.error)
                    $(this).html('<p>' + data.error + '</p>').slideDown();
                else {
                    var html = '';
                    html += '<tr><td>Institution name</td><td>' + data.institution.name + '</td></tr>';
                    html += '<tr><td>Billed products</td><td>' + data.item.billed_products.join(', ') + '</td></tr>';
                    html += '<tr><td>Available products</td><td>' + data.item.available_products.join(', ') + '</td></tr>';

                    $(this).html(html).slideDown();
                }
            });
        });
    });

    $('#get-transactions-btn').on('click', function (e) {
        $.get('/transactions', function (data) {
            if (data.error != null && data.error.error_code != null) {
                // Format the error
                var errorHtml = '<div className="inner"><p>' +
                    '<strong>' + data.error.error_code + ':</strong> ' +
                    (data.error.display_message == null ? data.error.error_message : data.error.display_message) + '</p></div>';

                if (data.error.error_code === 'PRODUCT_NOT_READY') {
                    // Add additional context for `PRODUCT_NOT_READY` errors
                    errorHtml += '<div className="inner"><p>Note: The PRODUCT_NOT_READY ' +
                        'error is returned when a request to retrieve Transaction data ' +
                        'is made before Plaid finishes the <a href="https://plaid.com/' +
                        'docs/quickstart/#transaction-data-with-webhooks">initial ' +
                        'transaction pull.</a></p></div>';
                }
                // Render the error
                $('#get-transactions-data').slideUp(function () {
                    $(this).slideUp(function () {
                        $(this).html(errorHtml).slideDown();
                    });
                });
            } else {
                $('#get-transactions-data').slideUp(function () {
                    var html = '<tr><td><strong>Name</strong></td><td><strong>Amount</strong></td><td><strong>Date</strong></td></tr>';
                    data.transactions.transactions.forEach(function (txn, idx) {
                        html += '<tr>';
                        html += '<td>' + txn.name + '</td>';
                        html += '<td>$' + txn.amount + '</td>';
                        html += '<td>' + txn.date + '</td>';
                        html += '</tr>';
                    });

                    $(this).slideUp(function () {
                        $(this).html(html).slideDown();
                    });
                });
            }
        });
    });

    $('#get-balance-btn').on('click', function (e) {
        $.get('/balance', function (data) {
            $('#get-balance-data').slideUp(function () {
                var balanceData = data.balance;
                var html = '<tr><td><strong>Name</strong></td><td><strong>Balance</strong></td><td><strong>Subtype</strong></td><td><strong>Mask</strong></td></tr>';
                balanceData.accounts.forEach(function (account, idx) {
                    html += '<tr>';
                    html += '<td>' + account.name + '</td>';
                    html += '<td>$' + (account.balances.available != null ? account.balances.available : account.balances.current) + '</td>'
                    html += '<td>' + account.subtype + '</td>';
                    html += '<td>' + account.mask + '</td>';
                    html += '</tr>';
                });

                $(this).html(html).slideDown();
            });
        });
    });

    $('#get-assets-btn').on('click', function (e) {
        $.get('/assets', function (data) {
            $('#get-assets-data').slideUp(function () {
                var reportData = data.json;
                var html = `
          <tr>
            <td><strong>Account</strong></td>
            <td><strong>Balance</strong></td>
            <td><strong># Transactions</strong></td>
            <td><strong># Days Available</strong></td>
          </tr>`;
                reportData.items.forEach(function (item, itemIdx) {
                    item.accounts.forEach(function (account, accountIdx) {
                        html += '<tr>';
                        html += '<td>' + account.name + '</td>';
                        html += '<td>$' + account.balances.current + '</td>'
                        html += '<td>' + account.transactions.length + '</td>';
                        html += '<td>' + account.days_available + '</td>';
                        html += '</tr>';
                    });
                });

                $('#download-assets-pdf-btn')
                    .attr('href', `data:application/pdf;base64,${data.pdf}`)
                    .attr('download', 'Asset Report.pdf')
                    .show();

                $(this).html(html).slideDown();
            });
        });
    });
})(jQuery);

function qs(key) {
    key = key.replace(/[*+?^$.\[\]{}()|\\\/]/g, "\\$&"); // escape RegEx meta chars
    var match = location.search.match(new RegExp("[?&]" + key + "=([^&]+)(&|$)"));
    return match && decodeURIComponent(match[1].replace(/\+/g, " "));
};
