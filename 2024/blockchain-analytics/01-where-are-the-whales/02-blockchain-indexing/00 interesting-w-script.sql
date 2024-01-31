SELECT from_address, to_address, value, transaction_hash, block_timestamp, block_number
FROM `bigquery-public-data.blockchain_analytics_ethereum_mainnet_us.transactions_by_from_address` 
WHERE from_address in ('0xec5feafe210c12bfc9a5d05925a123f1e73fbef8', '0x7f3a1e45f67e92c880e573b43379d71ee089db54', '0xd64a2d50f8858537188a24e0f50df1681ab07ed7', '0x198ef1ec325a96cc354c7266a038be8b5c558f67') 
ORDER BY block_number