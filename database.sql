CREATE TABLE "to_do_list" (
	"id" SERIAL PRIMARY KEY,
	"task" VARCHAR(200) NOT NULL
);	

INSERT INTO "to_do_list" ("task")
VALUES ('Laundry'), ('Wash the car'), ('Feed the animals'), ('Get groceries');
