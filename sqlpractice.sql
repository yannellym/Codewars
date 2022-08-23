SELECT r.name region, a.name account, 
       o.total_amt_usd/(o.total + 0.01) unit_price
FROM region r
JOIN sales_reps s
ON s.region_id = r.id
JOIN accounts a
ON a.sales_rep_id = s.id
JOIN orders o
ON o.account_id = a.id;


#####

SELECT r.name Region, a.name Account, o.total_amt_usd/(o.total + 0.01) unit_price
FROM orders o
JOIN accounts a
ON o.account_id = a.id
JOIN sales_reps s
ON s.id = a.sales_rep_id
JOIN region r
ON s.region_id = r.id
WHERE o.standard_qty > 100 
AND poster_qty > 50
ORDER BY unit_price


SELECT SUM(num) nums, SUM(letter) letters
FROM (SELECT name, CASE WHEN LEFT(UPPER(name), 1) IN ('0','1','2','3','4','5','6','7','8','9') 
                       THEN 1 ELSE 0 END AS num, 
         CASE WHEN LEFT(UPPER(name), 1) IN ('0','1','2','3','4','5','6','7','8','9') 
                       THEN 0 ELSE 1 END AS letter
      FROM accounts) t1;


# Each company in the accounts table wants to create an email address for each primary_poc. The email address should be the first name of the primary_poc . last name primary_poc @ company name .com.

SELECT primary_poc, CONCAT(LEFT(primary_poc, STRPOS(primary_poc, ' ') - 1),'.', RIGHT(primary_poc, LENGTH(primary_poc) - STRPOS(primary_poc, ' ')),'@', name, '.com')
FROM accounts


# Convert to new date
SELECT date, (SUBSTR(date, 1,2) || '-' || SUBSTR(date, 4,2) || '-' || SUBSTR(date, 7,4))::date AS new_date
FROM sf_crime_data
LIMIT 20
