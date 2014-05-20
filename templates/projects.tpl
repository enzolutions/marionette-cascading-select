<div class="control-group">
  <label class="control-label" for="input">Projects</label>
  <div class="controls">
    <select id="select_projects">
      <option value=0>Select</option>
     <% _.each(items, function(item){ %>
      <option value=<%= item.id %>><%= item.name %></option>
     <% }); %>
    </select>
  </div>
</div>
