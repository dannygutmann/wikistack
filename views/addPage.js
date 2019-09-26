const html = require("html-template-tag");
const layout = require("./layout");

module.exports = () => layout(html`
  <h3>Add a Page</h3>
  <hr>
  <form method="POST" action="/wiki/">

    <div>PLACEHOLDER FOR AUTHOR NAME FIELD</div>

    <div>PLACEHOLDER FOR AUTHOR EMAIL FIELD</div>

    <div class="form-group">
      <label for="title" class="col-sm-2 control-label">Page Title</label>
      <div class="col-sm-10">
        <input id="title" name="title" type="text" class="form-control"/>
      </div>
    </div>

    <div>
    <input id="content" name="content" type="text" class="content-field"/>
    PLACEHOLDER FOR PAGE CONTENT TEXTAREA FIELD
    </div>

    <div>
    <select id="status" name="status" class="status-control">
      <option value="open"> Open </option>
      <option value="closed"> Closed </option>
    </select>
    PLACEHOLDER FOR PAGE STATUS INPUT FIELD</div>

    <div class="col-sm-offset-2 col-sm-10">
      <button type="submit" class="btn btn-primary">submit</button>
    </div>

  </form>
`);
