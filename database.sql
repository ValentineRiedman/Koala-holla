CREATE TABLE items(
	"id" serial PRIMARY KEY,
	"name" varchar(16),
	"gender" varchar(16),
	"age" varchar(16),
	"ready_to_transfer" varchar(1),
	"notes" varchar(256)
);

INSERT INTO koalas ( name, gender, age, ready_to_transfer, notes ) VALUES ( 'Valentine', 'M', '38','N', 'Likes tacos' );