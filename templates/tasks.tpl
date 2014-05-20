<div class="control-group">
  <label class="control-label" for="input">Tasks</label>
  <div class="controls">
    <select id="select_tasks">
      <option value=0>Select</option>
     <% _.each(items, function(item){ %>
      <option value=<%= item.id %>><%= item.name %></option>
     <% }); %>
    </select>
  </div>
</div>

<div class="control-group">
  <label class="control-label" for="input">Date</label>
  <div class="controls">
    <input type="text" id="task_date">
  </div>
</div>
<div class="control-group">
  <label class="control-label" for="input">Hours</label>
  <div class="controls">
    <input type="text" id="taks_hours">
  </div>
</div>
<div class="control-group">
  <label class="control-label" for="input">Notes</label>
  <div class="controls">
    <textarea id="taks_notes"></textarea>
  </div>
</div>
