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