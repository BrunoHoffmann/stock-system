const { ApolloServer } = require('apollo-server');

const typeDefs = `
	type Product {
		id: Int
		name: String
		bar_code: String
		amount: Int
		value: String
	}

	type User {
		id: Int
		name: String
		email: String
		password: String
		token: String
	}

	type Query {
		product: [Product]
		user: [User]
	}
`;

const product = [
	{ id: 1, name: 'Luva', bar_code: '321232131231', amount: 19, value: '19,90' },
	{ id: 2, name: 'Camisa', bar_code: '214215251521', amount: 21, value: '29,90' },
	{ id: 3, name: 'Calça', bar_code: '1452142141241', amount: 2, value: '39,90' },
];

const user = [
	{ id: 1, name: 'Bruno Hoffmann', email: 'brunohoffmanndev@gmail.com', password: 'flamengo1', token: '21323122312adwad@#@'},
	{ id: 2, name: 'Tiago Hoffmann', email: 'brunohoffmanndev@gmail.com', password: 'flamengo1', token: '21323122312adwad@#@'},
	{ id: 3, name: 'Amanda Hoffmann', email: 'brunohoffmanndev@gmail.com', password: 'flamengo1', token: '21323122312adwad@#@'},
]

const resolvers = {
	Query: {
		product() {
			return product;
		},
		user() {
			return user;
		}
	}
}

const server = new ApolloServer({ typeDefs, resolvers });
server.listen();
