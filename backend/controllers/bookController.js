import Book from '../models/bookModel.js';

export const name = async (req, res) => {};

// get all books
export const getAllBooks = async (req, res) => {
	const allBooks = await Book.find();

	res.status(200).json(allBooks);
};

// create new book
export const createBook = async (req, res) => {
	const { isAdmin } = req.user;

	if (!isAdmin) {
		res.status(400);
		throw new Error('admin issue - Unauthorized');
	}
	const { title, author, view, img_url, genre, kkp_id, complete } = req.body;

	const newBook = await Book.create({
		title,
		author,
		view,
		img_url,
		genre,
		kkp_id,
		complete,
	});

	res.status(200).json(newBook);
};
