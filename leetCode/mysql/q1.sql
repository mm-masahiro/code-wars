-- https://leetcode.com/problems/recyclable-and-low-fat-products/submissions/
-- my code
-- # Write your MySQL query statement below
select product_id
from products
where low_fats = 'Y'
and recyclable = 'Y'
