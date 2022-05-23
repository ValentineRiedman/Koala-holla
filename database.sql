CREATE TABLE koala(
	"id" serial PRIMARY KEY,
	"name" varchar(16),
	"gender" varchar(16),
	"age" varchar(3),
	"ready_to_transfer" boolean DEFAULT false,
	"notes" varchar(256)
);
INSERT INTO koala ( name, gender, age, ready_to_transfer, notes ) VALUES ( 'Valentine', 'M', '38','N', 'Likes tacos' );
SELECT * FROM koala;
DELETE FROM koala WHERE id=2;
UPDATE koala SET ready_to_transfer=true WHERE id=$1;