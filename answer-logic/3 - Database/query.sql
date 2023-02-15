/*
DB Task dalam SQL Query
• Visit https://www.dbfiddle.com/f/9T1DkMFkyXMgEQiw8PZrPS/1

Tampilkan informasi customer, alamat dan clusternya
*/

select us.nama as nama_customer, al.alamat as alamat_customer, cls.alamat as cluster_customer from user as us 
INNER JOIN alamat as al 
ON us.cid=al.cid
INNER JOIN cluster as cls
ON us.cluster_id=cls.cid;