CREATE TABLE image (
	uuid BINARY(16) NOT NULL,

	size INT NOT NULL,
	width SMALLINT NOT NULL,
	height SMALLINT NOT NULL,

	created timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
	updated timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,

	PRIMARY KEY (uuid)
)

ENGINE=InnoDB
DEFAULT CHARSET=utf8mb4
COLLATE=utf8mb4_0900_ai_ci;