SELECT
    date AS day,
    COUNT(CASE WHEN score >= 0.00 THEN 1 ELSE NULL END) AS num_pos_scores,
    COUNT(CASE WHEN score < 0.00 THEN 1 ELSE NULL END) AS num_neg_scores
FROM assessments
WHERE
    date BETWEEN '2011-03-01' AND '2011-04-30'
GROUP BY DATE(date);
