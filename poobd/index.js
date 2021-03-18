const { Pool } = require('pg');

async function criarConexao() {
	const poll = new Pool({
		connectionString:
			'postgres: // lporgqgfsqvrol : bca03ed5eda59071bd3fd199c5ccfcee1cad8274cbd9defa05d12b1c9a9bf55f @ ec2-54-242-43-231.compute-1.amazonaws.com : 5432 / d7gt63nm8t8nuf8t8',
		ssl: {
			rejectUnauthorized: false
		}
	});
	let con = await poll.connect();
	await con.query(`create table pizza(
            id serial,
            tamanho varchar,
            sabor varchar,
            constraint pizza_pk primary key (id)
        )`);

	await con.query(
		`insert into pizza(tamanho, sabor) values 
            ($1, $2)`,
		['pequena', 'camarao']
	);
	await con.query(
		`insert into pizza(tamanho, sabor) values 
            ($1, $2), ($3, $4), ($5, $6)`,
		['gigante', 'banana', 'familia', 'queijo', 'grande', 'portuguesa']
	);

	await con.query(`update pizza set tamanho = $1 where id = $2`, [
		'gigante',
		3
	]);

	let res = await con.query('select * from pizza');
	console.log(res);
	con.release();
}
criarConexao();
