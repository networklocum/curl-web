export const QueryStorage = function QueryStorageFactory (uuid, QueryBuilder) {
  const storageId = "curl-web-queries"
  let queries = [];

  const store = {
    fetch,
    queries,
    add,
    remove,
    get
  }

  function _save(query) {
    localStorage.setItem(storageId, angular.toJson(store.queries));
  }

  function fetch() {
    store.queries = angular.fromJson(localStorage.getItem(storageId));

    if(!store.queries) {
      store.queries = []
    }

    store.queries = store.queries.map(QueryBuilder.restaureQuery)
  }

  function add(query) {
    query = angular.merge(query, { id: uuid.v1() });
    store.queries.push(query);
    _save();

    return query;
  }

  function remove(queryUUID) {
    store.queries.splice(_.findIndex(store.queries, { id: queryUUID }), 0);
    _save();
  }

  function get(queryUUID) {
    return store.queries[_.findIndex(store.queries, { id: queryUUID})];
  }

  return store
}