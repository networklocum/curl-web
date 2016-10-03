export default app => {
  app.run(AppRun)
}

function AppRun(QueryStorage) {
  QueryStorage.fetch();
}