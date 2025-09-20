:root { --brand:#0d6efd; --muted:#6c757d; --bg:#f8f9fa; }
* { box-sizing:border-box; margin:0; padding:0; }
body { font-family:Arial, sans-serif; background:var(--bg); color:#222; }

header { display:flex; justify-content:space-between; align-items:center;
  padding:1rem 2rem; background:#fff; box-shadow:0 1px 5px rgba(0,0,0,.1); }
header h1 { font-size:1.2rem; }

.search { display:flex; gap:.5rem; align-items:center; }
.search input { padding:.5rem; border:1px solid #ddd; border-radius:6px; }

.container { max-width:1000px; margin:1.5rem auto; padding:0 1rem; }
.grid { display:grid; grid-template-columns:repeat(auto-fill,minmax(220px,1fr)); gap:1rem; }

.card { background:#fff; padding:1rem; border-radius:10px;
  box-shadow:0 2px 8px rgba(0,0,0,.08); display:flex; flex-direction:column; }
.card .title { font-weight:bold; margin:.5rem 0; }
.card .price { color:var(--brand); font-weight:bold; }
.card button { margin-top:auto; padding:.5rem; background:var(--brand); color:#fff;
  border:none; border-radius:6px; cursor:pointer; }

.cart-btn { position:relative; }
.cart-count { position:absolute; top:-8px; right:-8px; background:red; color:#fff;
  padding:2px 6px; border-radius:50%; font-size:.8rem; }

.cart-panel { position:fixed; right:20px; top:80px; width:300px; background:#fff;
  border-radius:10px; box-shadow:0 5px 20px rgba(0,0,0,.2); padding:1rem; display:none; }
.cart-panel.open { display:block; }

.cart-item { display:flex; justify-content:space-between; align-items:center;
  border-bottom:1px solid #eee; padding:.5rem 0; }
.cart-item .qty { display:flex; gap:.25rem; align-items:center; }
.cart-item .qty button { width:24px; height:24px; border:1px solid #ccc; background:#fff; }

.checkout { display:flex; justify-content:space-between; align-items:center; margin-top:1rem; }
.checkout button { background:green; color:#fff; border:none; padding:.5rem 1rem; border-radius:6px; }

footer { text-align:center; padding:1rem; color:var(--muted); font-size:.9rem; }
