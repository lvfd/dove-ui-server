# lvfd@acca.com.cn Updated in 2023/3/10
<h1>Development Line</h1>
<h2>For Node_env: </h2>
<ul>
  <li>Get NODE_ENV: <code>set NODE_ENV</code></li>
  <li>Set NODE_ENV in localhost: <code>set NODE_ENV=development</code></li>
  <li>Set NODE_ENV in servers: <code>set NODE_ENV=production</code></li>
</ul>
<h2>For Webpack: </h2>
<ul>
  <li>For Projects: <code>npx webpack --config-name "the project name" -w --node-env="the environment"</code></li>
  <li>For All: <code>npx webpack --node-env="the environment"</code></li>
</ul>
<h2>For Gulp: </h2>
<ul>
  <li>For Projects: <code>npx gulp "the project name"</code></li>
</ul>