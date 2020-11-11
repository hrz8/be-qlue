SELECT
    date AS day
FROM assessments
WHERE
    score >= 0 AND
    date BETWEEN '2011-01-01' AND '2011-06-30'
GROUP BY DATE(date); 
