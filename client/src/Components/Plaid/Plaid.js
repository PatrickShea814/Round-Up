< !DOCTYPE html >
    <html lang="en">

        <head>
            <meta charset="UTF-8">
                <title>Plaid Quickstart Example</title>
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
                    integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
                    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
                        integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous">
                        <link rel="stylesheet" href="https://threads.plaid.com/threads.css">

                            <link rel="stylesheet" type="text/css" href="style.css">
                                <meta name="viewport" content="width=device-width, initial-scale=1">
</head>

                                <body>
                                    <main class="main">
                                        <div class="grid">
                                            <div class="grid__column grid__column--is-twelve-columns">
                                                <div id="banner" class="everpresent-content">
                                                    <h1 class="everpresent-content__heading">Plaid Quickstart</h1>
                                                    <p id="intro" class="everpresent-content__subheading">
                                                        An example application that outlines an end-to-end integration with Plaid
          </p>
                                                    <p id="steps" class="everpresent-content__subheading">
                                                        Success! You just created an Item by linking your account.
          </p>
                                                </div>

                                                <div id="container" class="initial-view">
                                                    <p class="initial-view__description">
                                                        Click the button below to open a list of Institutions. After you select one, you’ll be guided through an
                                                        authentication process. Upon completion, a public_token will be passed back to the server and exchanged for
                                                        access_token.
          </p>

                                                    <button id="link-btn" class="button button--is-primary">Connect with Plaid</button>
                                                </div>

                                                <div id="app" class="connected-view">
                                                    <div class="item-overview">
                                                        <div class="item-overview__column">
                                                            <h3 class="item-overview__heading">item_id</h3>
                                                            <p class="item-overview__id" id="item_id">san.asjsansakjsakjasjksajkas</p>
                                                        </div>
                                                        <div class="item-overview__column">
                                                            <h3 class="item-overview__heading">access_token</h3>
                                                            <p class="item-overview__id" id="access_token">••••••••hsakjsl</p>
                                                        </div>

                                                        <div style="clear: both"></div>
                                                    </div>

                                                    <p>Now that you have an access_token you can make all of the following API requests:</p>

                                                    <div class="box">
                                                        <h3 class="box__heading">Products</h3>

                                                        <!-- Auth -->
            <div class="item-data-row">
                                                            <div class="item-data-row__left">
                                                                <div class="item-data-row__request-type">post</div>
                                                            </div>
                                                            <div class="item-data-row__center">
                                                                <div class="item-data-row__nicename">Auth</div>
                                                                <div class="item-data-row__endpoint">/auth/get</div>
                                                                <div class="item-data-row__description">Retrieve account and routing numbers for checking and savings
                  accounts.</div>
                                                            </div>
                                                            <div class="item-data-row__right">
                                                                <button id="get-auth-btn" class="button button--is-small button--is-default button--is-full-width">Send
                  request</button>
                                                            </div>
                                                            <div class="item-data-row__response">
                                                                <table>
                                                                    <tbody id="get-auth-data"></tbody>
                                                                </table>
                                                            </div>
                                                        </div>

                                                        <!--Transactions -->
            <div class="item-data-row">
                                                            <div class="item-data-row__center">
                                                                <div class="item-data-row__nicename">My PennyWise Savings</div>
                                                                <div class="item-data-row__description">View your PennyWise savings history from the last 30 days.</div>
                                                            </div>
                                                            <div class="item-data-row__right">
                                                                <button id="get-transactions-btn"
                                                                    class="button button--is-small button--is-default button--is-full-width">Vew Savings</button>
                                                            </div>
                                                            <div class="item-data-row__response">
                                                                <table>
                                                                    <tbody id="get-transactions-data"></tbody>
                                                                </table>
                                                            </div>
                                                        </div>

                                                        <!-- Identity -->
            <div class="item-data-row">
                                                            <div class="item-data-row__left">
                                                                <div class="item-data-row__request-type">post</div>
                                                            </div>
                                                            <div class="item-data-row__center">
                                                                <div class="item-data-row__nicename">Identity</div>
                                                                <div class="item-data-row__endpoint">/identity/get</div>
                                                                <div class="item-data-row__description">Retrieve Identity information on file with the bank. Reduce
                  fraud by comparing user-submitted data to validate identity.</div>
                                                            </div>
                                                            <div class="item-data-row__right">
                                                                <button id="get-identity-btn"
                                                                    class="button button--is-small button--is-default button--is-full-width">Send request</button>
                                                            </div>
                                                            <div class="item-data-row__response">
                                                                <table>
                                                                    <tbody id="get-identity-data"></tbody>
                                                                </table>
                                                            </div>
                                                        </div>

                                                        <!-- Balance -->
            <div class="item-data-row">
                                                            <div class="item-data-row__left">
                                                                <div class="item-data-row__request-type">post</div>
                                                            </div>
                                                            <div class="item-data-row__center">
                                                                <div class="item-data-row__nicename">Balance</div>
                                                                <div class="item-data-row__endpoint">/accounts/balance/get</div>
                                                                <div class="item-data-row__description">Check balances in real time to prevent non-sufficient funds
                  fees.</div>
                                                            </div>
                                                            <div class="item-data-row__right">
                                                                <button id="get-balance-btn"
                                                                    class="button button--is-small button--is-default button--is-full-width">Send request</button>
                                                            </div>
                                                            <div class="item-data-row__response">
                                                                <table>
                                                                    <tbody id="get-balance-data"></tbody>
                                                                </table>
                                                            </div>
                                                        </div>

                                                        <!-- Assets (hidden unless 'assets' is included in the product list) -->
            <div id='assets' class="item-data-row" style='display:none;'>
                                                            <div class="item-data-row__left">
                                                                <div class="item-data-row__request-type">post</div>
                                                            </div>
                                                            <div class="item-data-row__center">
                                                                <div class="item-data-row__nicename">Assets</div>
                                                                <div class="item-data-row__endpoint">/asset_report/*</div>
                                                                <div class="item-data-row__description">Create a point-in-time snapshot of a user's assets.</div>
                                                            </div>

                                                            <div class="item-data-row__right">
                                                                <button id="get-assets-btn"
                                                                    class="button button--is-small button--is-default button--is-full-width">Send request</button>

                                                                <a id="download-assets-pdf-btn" class="button button--is-small button--is-primary button--is-full-width"
                                                                    style="display: none; margin: 10px 0px;" ; >Download as PDF</a>
                                                        </div>

                                                        <div class="item-data-row__response">
                                                            <table>
                                                                <tbody id="get-assets-data"></tbody>
                                                            </table>
                                                        </div>
                                                    </div>

                                                </div>

                                                <div class="box">
                                                    <h3 class="box__heading">Item management</h3>

                                                    <div class="item-data-row">
                                                        <div class="item-data-row__left">
                                                            <div class="item-data-row__request-type">post</div>
                                                        </div>
                                                        <div class="item-data-row__center">
                                                            <div class="item-data-row__endpoint">/item/get</div>
                                                            <div class="item-data-row__description">Retrieve information about an Item, like the institution, billed
                  products, available products, and webhook information.</div>
                                                        </div>

                                                        <div class="item-data-row__right">
                                                            <button id="get-item-btn" class="button button--is-small button--is-default button--is-full-width">Send
                  request</button>
                                                        </div>

                                                        <div class="item-data-row__response">
                                                            <table>
                                                                <tbody id="get-item-data"></tbody>
                                                            </table>
                                                        </div>
                                                    </div>

                                                    <div class="item-data-row">
                                                        <div class="item-data-row__center">
                                                            <div class="item-data-row__nicename">My Connected Accounts</div>
                                                            <div class="item-data-row__description">View all of your accounts currently connected to PennyWise.
                </div>
                                                        </div>
                                                        <div class="item-data-row__right">
                                                            <button id="get-accounts-btn"
                                                                class="button button--is-small button--is-default button--is-full-width">View Accounts</button>
                                                        </div>
                                                        <div class="item-data-row__response">
                                                            <table>
                                                                <tbody id="get-accounts-data"></tbody>
                                                            </table>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
    </div>
  </main>
                                <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
                                    integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
                                    crossorigin="anonymous"></script>
                                <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"
                                    integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1"
                                    crossorigin="anonymous"></script>
                                <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"
                                    integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM"
                                    crossorigin="anonymous"></script>
                                <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.2.3/jquery.min.js"></script>
                                <script src="https://cdn.plaid.com/link/v2/stable/link-initialize.js"></script>
                                <script>
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
        onSuccess: function (public_token, metadata) {
                                        console.log(metadata);
                                    // Send the public_token to your app server.
                                    // The metadata object contains info about the institution the
                                    // user selected and the account ID or IDs, if the
                                    // Select Account view is enabled.
                                    $.post('/get_access_token', {
                                        public_token: public_token,
                                    account_id: metadata.account_id
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
                              
      $('#link-btn').on('click', function (e) {
                                        handler.open();
                                    });
                              
      $('#get-accounts-btn').on('click', function (e) {
                                        $.get('/item', function (data) {
                                            $.get('/accounts', function (data1) {
                                                $('#get-accounts-data').slideUp(function () {
                                                    var html = '<tr><td><strong>Name</strong></td><td><strong>Subtype</strong></td><td><strong>Institution Name</strong></td><td><strong>Delete?</strong></td>tr>';
                                                    var deleteButton = '<button type="button" class="btn btn-outline-danger"> <i class="fas fa-times"></i> </button>'
                                                    data1.accounts.accounts.forEach(function (account, idx) {
                                                        html += '<tr>';
                                                        html += '<td>' + account.name + '</td>';
                                                        html += '<td>' + account.subtype + '</td>';
                                                        html += '<td>' + data.institution.name + '</td>';
                                                        html += '<td>' + deleteButton + '</td>';
                                                        html += '</tr>';
                                                    });
                                                    $(this).html(html).slideDown();
                                                });
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
                                                var html = '<tr class="response-row response-row--is-identity"><td><strong>Names</strong></td><td><strong>Emails</strong></td><td><strong>Phone numbers</strong></td><td><strong>Addresses</strong></td></tr><tr class="response-row response-row--is-identity">';
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
                                                var errorHtml = '<div class="inner"><p>' +
                                                    '<strong>' + data.error.error_code + ':</strong> ' +
                                                    (data.error.display_message == null ? data.error.error_message : data.error.display_message) + '</p></div>';

                                                if (data.error.error_code === 'PRODUCT_NOT_READY') {
                                                    // Add additional context for `PRODUCT_NOT_READY` errors
                                                    errorHtml += '<div class="inner"><p>Note: The PRODUCT_NOT_READY ' +
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
                                                    var html = '<tr><td><strong>Name</strong></td><td><strong>Amount</strong></td><td><strong>Date</strong></td><td><strong>Account</strong></td></tr>';
                                                    data.transactions.transactions.forEach(function (txn, idx) {
                                                        html += '<tr>';
                                                        html += '<td>' + txn.name + '</td>';
                                                        html += '<td>$' + txn.amount + '</td>';
                                                        html += '<td>' + txn.date + '</td>';
                                                        html += '<td>' + 'My Checking Account' + '</td>';
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
                                  }
  </script>
</body>

</html>