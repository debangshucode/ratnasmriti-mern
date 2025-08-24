<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>API Documentation</title>
  <style>
    body { font-family: Arial, sans-serif; margin: 20px; }
    h1 { color: #333; }
    h2 { color: #444; border-bottom: 2px solid #ddd; padding-bottom: 5px; }
    table { width: 100%; border-collapse: collapse; margin-bottom: 30px; }
    th, td { border: 1px solid #ccc; padding: 10px; text-align: left; }
    th { background-color: #f8f8f8; }
    code { background: #f4f4f4; padding: 2px 4px; border-radius: 4px; }
  </style>
</head>
<body>

  <h1>API Documentation</h1>
  <p>This document lists all available API routes with required fields for frontend integration.</p>

  <!-- Auth Routes -->
  <h2>Authentication</h2>
  <table>
    <tr><th>Endpoint</th><th>Method</th><th>Required Fields</th></tr>
    <tr>
      <td><code>/api/auth/register</code></td>
      <td>POST</td>
      <td>name, email, password</td>
    </tr>
    <tr>
      <td><code>/api/auth/login</code></td>
      <td>POST</td>
      <td>email, password</td>
    </tr>
  </table>

  <!-- Category Routes -->
  <h2>Categories</h2>
  <table>
    <tr><th>Endpoint</th><th>Method</th><th>Required Fields</th></tr>
    <tr>
      <td><code>/api/admin/categories</code></td>
      <td>POST</td>
      <td>name</td>
    </tr>
    <tr>
      <td><code>/api/admin/categories</code></td>
      <td>GET</td>
      <td>-</td>
    </tr>
  </table>

  <!-- SubCategory Routes -->
  <h2>Sub Categories</h2>
  <table>
    <tr><th>Endpoint</th><th>Method</th><th>Required Fields</th></tr>
    <tr>
      <td><code>/api/admin/subcategories</code></td>
      <td>POST</td>
      <td>name, main_category (ObjectId)</td>
    </tr>
    <tr>
      <td><code>/api/admin/subcategories</code></td>
      <td>GET</td>
      <td>-</td>
    </tr>
  </table>

  <!-- Post Routes -->
  <h2>Posts</h2>
  <table>
    <tr><th>Endpoint</th><th>Method</th><th>Required Fields</th></tr>
    <tr>
      <td><code>/api/admin/posts</code></td>
      <td>POST</td>
      <td>title, content, category (ObjectId), subCategory (ObjectId), image (file)</td>
    </tr>
    <tr>
      <td><code>/api/admin/posts</code></td>
      <td>GET</td>
      <td>-</td>
    </tr>
  </table>

  <!-- Users -->
  <h2>Users</h2>
  <table>
    <tr><th>Endpoint</th><th>Method</th><th>Required Fields</th></tr>
    <tr>
      <td><code>/api/admin/users</code></td>
      <td>GET</td>
      <td>-</td>
    </tr>
    <tr>
      <td><code>/api/admin/users/:id</code></td>
      <td>DELETE</td>
      <td>id (URL param)</td>
    </tr>
  </table>

</body>
</html>
