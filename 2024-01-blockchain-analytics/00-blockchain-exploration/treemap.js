window.walletCount = 1000;
const USDollar = new Intl.NumberFormat("en-US");

function renderWalletTree() {
  const data = walletData
    .sort((a, b) => b.value - a.value)
    .slice(0, window.walletCount);

  // Set up dimensions for the treemap
  const width = 1200;
  const height = 1000;

  // Create a color scale
  const color = d3.scaleOrdinal(d3.schemeCategory10);

  // Create a hierarchy from the data
  const root = d3.hierarchy({ children: data }).sum((d) => d.value);

  // Create a treemap layout
  const treemap = d3.treemap().size([width, height]).padding(1).round(true);

  // Generate the treemap layout
  treemap(root);

  const getRandomColor = () =>
    `#${Math.floor(Math.random() * 16777215).toString(16)}`;

  // Create an SVG element for the treemap
  const svg = d3
    .select("#genesis-wallets-tree")
    .append("svg")
    .attr("width", width)
    .attr("height", height);

  // Add rectangles for each node in the treemap
  svg
    .selectAll("rect")
    .data(root.descendants())
    .enter()
    .append("a") // Wrap each rect with an anchor element
    .attr("href", (d) => `https://etherscan.io/address/${d.data.wallet}`) // Set the link using data.link
    .append("rect")
    .attr("x", (d) => d.x0)
    .attr("y", (d) => d.y0)
    .attr("width", (d) => d.x1 - d.x0)
    .attr("height", (d) => d.y1 - d.y0)
    .attr("fill", (d) => color(d.value))
    .attr("stroke", "white");

  // Add text labels for each node
  svg
    .selectAll("text")
    .data(root.descendants())
    .enter()
    .append("text")
    .attr("x", (d) => (d.x0 + d.x1) / 2)
    .attr("y", (d) => (d.y0 + d.y1) / 2)
    .attr("dy", "0.35em")
    .attr("text-anchor", "middle")
    .style("font-size", "12px") // Set a smaller font size
    .text((d) => {
      return d.data.wallet ? `(${USDollar.format(d.data.value)})` : "";
    });

  // Add a title
  svg
    .append("text")
    .attr("x", width / 2)
    .attr("y", -10)
    .attr("text-anchor", "middle")
    .style("font-size", "20px")
    .text(`Top ${window.walletCount} Genesis Wallets`);
}
