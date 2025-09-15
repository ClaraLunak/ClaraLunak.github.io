body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  line-height: 1.6;
  background: #f9f9f9;
  color: #333;
}

header {
  background: #222;
  color: #fff;
  padding: 40px 20px;
  text-align: center;
}

nav a {
  color: #fff;
  margin: 0 15px;
  text-decoration: none;
  transition: color 0.3s;
}
nav a:hover {
  color: #ff9800;
}

section {
  padding: 40px;
  max-width: 900px;
  margin: auto;
}

h2 {
  border-bottom: 2px solid #ccc;
  padding-bottom: 10px;
}

.projects {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
}

.card {
  background: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
  transition: transform 0.3s, box-shadow 0.3s;
  position: relative;
}
.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0,0,0,0.2);
}
.card img {
  width: 100%;
  border-radius: 5px;
  transition: transform 0.3s;
}
.card:hover img {
  transform: scale(1.05);
}
.btn {
  display: inline-block;
  margin-top: 10px;
  padding: 10px 20px;
  background: #ff9800;
  color: #fff;
  text-decoration: none;
  border-radius: 5px;
  transition: all 0.3s;
}
.btn:hover {
  background: #e68900;
  transform: scale(1.05);
}
footer {
  text-align: center;
  padding: 20px;
  background: #222;
  color: #fff;
}

