const container = document.getElementById('update-enter-exit'),
    height = container.clientWidth / 16 * 9,
    width = container.clientWidth;

let dataset = [
    {
        name: 'Update',
        fill: '242, 73, 104'
    },
    {
        name: 'Exit',
        fill: '81, 48, 115'
    },
]

const svg =
    d3.select('#update-enter-exit')
        .append('svg')
        .attr('width', width)
        .attr('height', height);

const g = svg.selectAll("circle")
    .data(dataset)
    .enter()
    .append("g")

g
    .append("circle")
    .attr("cx", (d, i) => width / 3 * (i + 1))
    .attr("cy", height / 2)
    .attr("r", height / 2.5)
    .attr("fill", d => `rgba(${d.fill},0.7)`)
    .attr("stroke", d => `rgb(${d.fill})`)
    .attr("stroke-width", 10)

g.append("text")
    .text(d => d.name)
    .attr("x", (d, i) => width / 3 * (i + 1) - d.name.length * 4)
    .attr("y", height / 2)

svg.append("text")
    .text("Enter")
    .attr("x", width / 2 - 20)
    .attr("y", height / 2)

svg.append("text")
    .text("Data")
    .attr("x", width / 3 - 20)
    .attr("y", 30)
    .attr("fill", "rgb(81, 48, 115)")

svg.append("text")
    .text("Elements")
    .attr("x", (width / 3 - 20) * 2)
    .attr("y", 30)
    .attr("fill", "rgb(242, 73, 104)")
