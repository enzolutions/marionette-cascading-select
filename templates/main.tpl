<form class="form-horizontal">
  <fieldset>
    <div class="control-group">
      <label class="control-label" for="input">User</label>
      <div class="controls">
        @enzo
      </div>
    </div>
    <div class="control-group">
      <label class="control-label" for="input">Client</label>
      <div class="controls">
        <select id="select_clients">
          <option value=0>Select</option>
         <% _.each(items, function(item){ %>
          <option value=<%= item.id %>><%= item.name %></option>
         <% }); %>
        </select>
      </div>
    </div>

    <div id="projects-region"></div>

    <div id="tasks-region"></div>

    <button class="btn btn-large">
          Add!
    </button>
  </fieldset>
</form>
