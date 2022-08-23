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

# COALESCE 
SELECT COALESCE(o.id, a.id) filled_id, a.name, a.website, a.lat, a.long, a.primary_poc, a.sales_rep_id, COALESCE(o.account_id, a.id) account_id, o.occurred_at, COALESCE(o.standard_qty, 0) standard_qty, COALESCE(o.gloss_qty,0) gloss_qty, COALESCE(o.poster_qty,0) poster_qty, COALESCE(o.total,0) total, COALESCE(o.standard_amt_usd,0) standard_amt_usd, COALESCE(o.gloss_amt_usd,0) gloss_amt_usd, COALESCE(o.poster_amt_usd,0) poster_amt_usd, COALESCE(o.total_amt_usd,0) total_amt_usd
FROM accounts a
LEFT JOIN orders o
ON a.id = o.account_id;


#WINDOW FUNCTIONS
SELECT id, account_id, total, RANK() OVER (PARTITION BY account_id ORDER BY total DESC) AS total_rank
FROM orders 


-- Self JOINs
-- change the interval to 1 day to find those web events that occurred after, but not more than 1 day after, another web event
-- add a column for the channel variable in both instances of the table in your query

SELECT we1.id AS we_id,
       we1.account_id AS we1_account_id,
       we1.occurred_at AS we1_occurred_at,
       we1.channel AS we1_channel,
       we2.id AS we2_id,
       we2.account_id AS we2_account_id,
       we2.occurred_at AS we2_occurred_at,
       we2.channel AS we2_channel
  FROM web_events we1 
 LEFT JOIN web_events we2
   ON we1.account_id = we2.account_id
  AND we1.occurred_at > we2.occurred_at
  AND we1.occurred_at <= we2.occurred_at + INTERVAL '1 day'
ORDER BY we1.account_id, we2.occurred_at
