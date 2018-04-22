/* Get tally of commands per platform */
SELECT Platforms.name, COUNT(*) FROM Commands
LEFT JOIN Programs ON Programs.id = Commands.programId 
LEFT JOIN Platforms ON Platforms.id = Programs.platformId
GROUP BY Platforms.id;

/* Get Number of commands per program in a platform */
SELECT Programs.name, COUNT(*) AS Tally FROM Commands
LEFT JOIN Programs ON Programs.id = Commands.programId
LEFT JOIN Platforms ON Platforms.id = Programs.platformId
WHERE Platforms.name = 'Common'
GROUP BY Programs.id
ORDER BY Tally DESC;

/* Get length of title of commands */
SELECT Programs.name, Commands.title, Length(Commands.title) as Len FROM Commands
LEFT JOIN Programs ON Programs.id = Commands.programId
LEFT JOIN Platforms ON Platforms.id = Programs.platformId
ORDER BY Len DESC;

/* Get length of commands */
SELECT Programs.name, Commands.rawContent, Length(Commands.rawContent) as Len FROM Commands
LEFT JOIN Programs ON Programs.id = Commands.programId
LEFT JOIN Platforms ON Platforms.id = Programs.platformId
ORDER BY Len DESC;

/* Select all Users */
SELECT * FROM Users;

/* Get all User's commands */
SELECT * FROM Users
INNER JOIN Commands ON Commands.userId = Users.id;

/* Get all User's guides */
SELECT 
	Users.id,
	USers.username,
	Guides.id,
	Guides.name
FROM Users
INNER JOIN Guides ON Guides.userId = Users.id;

/* Get all User's comments on commands */
SELECT 
	Users.id,
	Users.username,
	CommandComments.id,
	CommandComments.commandId,
	CommandComments.comment
	FROM Users
INNER JOIN CommandComments ON CommandComments.userId = Users.id;

/* Get all User's comments on guides */
SELECT 
	Users.id,
	Users.username,
	GuideComments.id,
	GuideComments.guideId,
	GuideComments.comment
FROM Users
INNER JOIN GuideComments ON GuideComments.userId = Users.id;

/* Get all User's comments */
SELECT 
	Users.id,
	Users.username,
	CommandComments.id,
	CommandComments.commandId,
	CommandComments.comment
	FROM Users
INNER JOIN CommandComments ON CommandComments.userId = Users.id
UNION ALL
SELECT 
	Users.id,
	Users.username,
	GuideComments.id,
	GuideComments.guideId,
	GuideComments.comment
FROM Users
INNER JOIN GuideComments ON GuideComments.userId = Users.id;



