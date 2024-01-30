<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Practical Blockchain: Where are the genesis wallets?</title>
    <!-- Add Bulma CSS -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.2/css/bulma.min.css">
    <!-- Add D3.js library -->
    <script src="https://d3js.org/d3.v7.min.js"></script>
    <script src="./00-blockchain-exploration/walletData.js"></script>
    <script src="./01-building-a-tracker/currentWalletData.js"></script>
    <script src="./00-blockchain-exploration/treemap.js"></script>
    <script src="./01-building-a-tracker/treemapInactive.js"></script>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Ubuntu&display=swap" rel="stylesheet">
    <style>
        body {
            font-family: 'Ubuntu', sans-serif;
        }
    </style>
</head>
<body>
    <div class="container">
        <section class="hero is-medium is-link">
            <div class="hero-body">
                <h1 class="title">
                What are the genesis accounts doing?
                </h1>
                <br/><br/>
                <p class="subtitle">
                Date: 30/01/2024
                </p>
            </div>
        </section>
        <div class="section is-medium">
            <h2 class="title">Top 1000 Genesis Wallets</h2>
            <div class="subtitle">Genesis wallets are the foundational pillars of cryptocurrency networks, marking the very genesis of a blockchain's existence. These wallets represent the initial stakeholders and contributors, housing the network's native tokens from its inception. They play a pivotal role in bootstrapping the network, determining token distribution, and often participating in on-chain governance, influencing network parameters, upgrades, and decision-making. However, their prominence also raises questions of trust and centralization, as the network's early custodians hold immense power. Genesis wallets hold historical significance, embodying the blockchain's ideals, governance principles, and the collaborative spirit that underpins decentralized ecosystems. They symbolize the genesis of a new era in blockchain technology.</div>
            <div class="row">
                <div class="column">
                    <div id="genesis-wallets-tree">
                    </div>
                </div>
                <div class="column">
                    <code></code>
                </div>
            </div>
        </div>

        <div class="section is-medium">
            <h2 class="title">Dormant wallets</h2>
            <div class="subtitle">Duis Lorem labore qui dolor nostrud quis minim elit quis deserunt voluptate dolore nisi. Ut fugiat amet ea sit officia officia sint qui ex elit. Ipsum ad pariatur nulla ullamco nostrud aliquip dolor in eu officia in dolor fugiat. Id ut qui ex et laboris qui ad. Esse qui ipsum nostrud qui minim fugiat commodo amet velit qui consequat duis. Excepteur ex mollit magna ea labore commodo excepteur proident nisi minim. Dolor consequat consectetur Lorem eu nulla ut et elit aliqua.</div>
            <div class="row">
                <div class="column">
                    <div id="genesis-wallets-inactive">
                    </div>
                </div>
                <div class="column">
                    <code></code>
                </div>
            </div>
        </div>

        <div class="section is-medium">
            <h2 class="title">Getting historical data</h2>
            <div class="subtitle">Duis Lorem labore qui dolor nostrud quis minim elit quis deserunt voluptate dolore nisi. Ut fugiat amet ea sit officia officia sint qui ex elit. Ipsum ad pariatur nulla ullamco nostrud aliquip dolor in eu officia in dolor fugiat. Id ut qui ex et laboris qui ad. Esse qui ipsum nostrud qui minim fugiat commodo amet velit qui consequat duis. Excepteur ex mollit magna ea labore commodo excepteur proident nisi minim. Dolor consequat consectetur Lorem eu nulla ut et elit aliqua.</div>
            <div class="row">
                <div class="column">
                    <div id="genesis-wallets-tree">
                    </div>
                </div>
                <div class="column">
                    <code></code>
                </div>
            </div>
        </div>
    </div>

    <script>
        (function() {
            renderWalletTree()
            renderInactiveWalletTree();
        })();
    </script>

</body>
</html>
