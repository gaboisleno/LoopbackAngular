exports.shorthands = undefined;

exports.up = (pgm) => {
	pgm.createTable("client", {
	    id: "id",
	    address: { type: "varchar(1000)" }
	});
};

exports.down = (pgm) => {
	pgm.dropTable("client", {
	    id: "id",
	    address: { type: "varchar(1000)" }
	});
};
