CREATE TABLE "to_do_list" (
	"id" SERIAL PRIMARY KEY,
	"task" VARCHAR(200) NOT NULL,
	"complete" BOOLEAN
);	

INSERT INTO "to_do_list" ("task", "complete")
VALUES ('Laundry', 'false'), ('Wash the car', 'false'), ('Feed the animals', 'false'), ('Get groceries', 'false');