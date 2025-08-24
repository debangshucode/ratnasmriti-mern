<h1>📌 Ratnas Backend API Documentation</h1>
<p>This document provides all available API endpoints and the required fields for frontend integration.</p>

<h2>🔑 Authentication</h2>
<table>
  <thead>
    <tr><th>Method</th><th>Endpoint</th><th>Required Fields</th></tr>
  </thead>
  <tbody>
    <tr><td>POST</td><td><code>/api/auth/login</code></td><td>email, password</td></tr>
    
  </tbody>
</table>

<h2>📂 Main-Categories</h2>
<table>
  <thead>
    <tr><th>Method</th><th>Endpoint</th><th>Required Fields</th></tr>
  </thead>
  <tbody>
    <tr><td>POST</td><td><code>/api/admin/categories/main</code></td><td>name</td></tr>
    <tr><td>GET</td><td><code>/api/admin/categories/main</code></td><td>—</td></tr>
  </tbody>
</table>

<h2>📂 Sub-Categories</h2>
<table>
  <thead>
    <tr><th>Method</th><th>Endpoint</th><th>Required Fields</th></tr>
  </thead>
  <tbody>
    <tr><td>POST</td><td><code>/api/admin/categories/sub</code></td><td>name, main_category (ObjectId)</td></tr>
    <tr><td>GET</td><td><code>/api/admin/categories/sub</code></td><td>—</td></tr>
  </tbody>
</table>

<h2>📝 Posts</h2>
<table>
  <thead>
    <tr><th>Method</th><th>Endpoint</th><th>Required Fields</th></tr>
  </thead>
  <tbody>
    <tr><td>POST</td><td><code>/api/admin/posts</code></td><td>title, content, category, subcategory, image (file)</td></tr>
    <tr><td>GET</td><td><code>/api/admin/posts</code></td><td>—</td></tr>
    <tr><td>GET</td><td><code>/api/posts/:id</code></td><td>postId</td></tr>
  </tbody>
</table>

<h2> Blogs</h2>
<table>
  <thead>
    <tr><th>Method</th><th>Endpoint</th><th>Required Fields</th></tr>
  </thead>
  <tbody>
    <tr><td>GET</td><td><code>/api/admin/blogs</code></td><td>—</td></tr>
    <tr><td>DELETE</td><td><code>/api/admin/blogs/:id</code></td><td>blogId</td></tr>
  </tbody>
</table>

<!-- <h2>⚙️ Other</h2>
<table>
  <thead>
    <tr><th>Method</th><th>Endpoint</th><th>Required Fields</th></tr>
  </thead>
  <tbody>
    <tr><td>GET</td><td><code>/api/dashboard/stats</code></td><td>—</td></tr>
  </tbody>
</table> -->
