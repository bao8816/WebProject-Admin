const search = instantsearch({ 
    indexName: 'products',
    searchClient: algoliasearch(
        'VV3TFI93CX',
        '4a0d45969d3b5e8f7f0866e1f4ba7fee'
    ),
    routing: true,
});

search.addWidgets([
    instantsearch.widgets.searchBox({
        container: '#search-box',
    }),
    instantsearch.widgets.clearRefinements({
        container: '#clear-refinements',
    }),
    instantsearch.widgets.refinementList({
        container: '#category',
        attribute: 'category',
    }),
    instantsearch.widgets.hits({
        container: '#hits',
        templates: {
            item: 
            `
            <div class="col-md-4">
                <div class="card mb-4 shadow-sm">
                    <img class="card-img-top" src="{{image}}" alt="{{name}}">
                    <div class="card-body">
                        <p class="card-text">{{{_highlightResult.name.value}}}</p>
                        <div class="d-flex justify-content-between align-items-center">
                            <div class="btn-group">
                                <a href="/product/{{slug}}" class="btn btn-sm btn-outline-secondary">View</a>
                                <a href="/product/{{slug}}/update" class="btn btn-sm btn-outline-secondary">Update</a>
                            </div>
                            <small class="text-muted">${{price}}</small>
                        </div>
                    </div>
                </div>
            </div>
                                `,
        },
    }),
    instantsearch.widgets.pagination({
        container: '#pagination',
    }),
])

search.start();
