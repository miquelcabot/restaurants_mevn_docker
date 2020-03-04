db.createUser({
    user: "cronmap",
    pwd: "cronmap",
    roles: [ { role: "readWrite", db: "cronmap" } ]
});
