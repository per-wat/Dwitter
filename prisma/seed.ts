import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

async function main() {
	const aria = await prisma.user.create({
		data: {
			name: "Aria",
			email: "aria@gmail.com",
			image: "https://i.pravatar.cc/150?img=31",
		},
	})

	const maria = await prisma.user.create({
		data: {
			name: "Maria",
			email: "maria@gmail.com",
			image: "https://i.pravatar.cc/150?img=47",
		},
	})

	const chad = await prisma.user.create({
		data: {
			name: "DatChadGuy",
			email: "chad@gmail.com",
			image: "https://i.pravatar.cc/150?img=53",
		},
	})

	const tweet1 = await prisma.tweet.create({
		data: {
			content: "Hello, Dwitter!",
			userId: aria.id,
		},
	})

	const tweet2 = await prisma.tweet.create({
		data: {
			content: "This is so dumb, why it even exist? 🤣",
			userId: maria.id,
		},
	})

	const tweet3 = await prisma.tweet.create({
		data: {
			content: "This Dwitter app looks so cool",
			userId: chad.id,
		},
	})

	const comment1 = await prisma.comment.create({
		data: {
			content: "Why are u so excited?! 😕",
			userId: maria.id,
			tweetId: tweet1.id,
		},
	})

	const comment2 = await prisma.comment.create({
		data: {
			content: "Hey there handsome 😏",
			userId: maria.id,
			tweetId: tweet3.id,
		},
	})

	const comment3 = await prisma.comment.create({
		data: {
			content: "It's kinda cool right 😃",
			userId: chad.id,
			tweetId: tweet1.id,
		},
	})

	const like1 = await prisma.like.create({
		data: {
			userId: maria.id,
			tweetId: tweet3.id,
		},
	})

	const like2 = await prisma.like.create({
		data: {
			userId: chad.id,
			tweetId: tweet1.id,
		},
	})

	const like3 = await prisma.like.create({
		data: {
			userId: aria.id,
			commentId: comment3.id,
		},
	})
}

main()
	.then(async () => {
		await prisma.$disconnect()
	})
	.catch(async (e) => {
		console.error(e)
		await prisma.$disconnect()
		process.exit(1)
	})
