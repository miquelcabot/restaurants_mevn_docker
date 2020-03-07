db.createUser({
    user: "restaurants",
    pwd: "restaurants",
    roles: [ { role: "readWrite", db: "restaurants" } ]
});
