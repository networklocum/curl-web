function LabelizeFilter () {
  return method => {
    let out = "label ";
    
    switch (method.toUpperCase()) {
      case "GET": 
        out += "label-success";
        break
      case "POST":
        out += "label-warning";
        break;
      case "PUT":
        out += "label-primary";
        break;
      case "DELETE":
        out += "label-danger";
        break;
      default:
        out += "label-default";
    }

    return out;
  }
}

export default app => {
  app.filter("labelize", LabelizeFilter)
}