interface IProduct {
  id: number;
  name: string;
  category: string;
  image: string;
  price: number;
  brand: string;
  rating: number;
  numReviews: number;
  countInStock: number;
  description: string;
  slug: string;
}

interface IDataProduct {
  products: IProduct[];
}

const data: IDataProduct = {
  products: [
    {
      id: 1,
      name: "Free Shirt",
      slug: "free-shirt",
      category: "Shirts",
      image: "/images/shirt1.jpg",
      price: 70,
      brand: "Nike",
      rating: 4.5,
      numReviews: 10,
      countInStock: 20,
      description: "A popular shirt",
    },
    {
      id: 2,
      name: "Fit Shirt",
      slug: "fit-shirt",
      category: "Shirts",
      image: "/images/shirt2.jpg",
      price: 80,
      brand: "Nike",
      rating: 4.2,
      numReviews: 10,
      countInStock: 20,
      description: "A popular shirt",
    },
    {
      id: 3,
      name: "Slim Shirt",
      slug: "slim-shirt",
      category: "Shirts",
      image: "/images/shirt3.jpg",
      price: 90,
      brand: "Raymond",
      rating: 4.2,
      numReviews: 10,
      countInStock: 20,
      description: "A popular shirt",
    },
    {
      id: 4,
      name: "Gold Pants",
      slug: "gold-pants",
      category: "Pants",
      image: "/images/pants1.jpg",
      price: 90,
      brand: "Oliver",
      rating: 4.2,
      numReviews: 10,
      countInStock: 20,
      description: "Smart looking pants",
    },
    {
      id: 5,
      name: "Fit Pants",
      slug: "fit-pants",
      category: "Pants",
      image: "/images/pants2.jpg",
      price: 95,
      brand: "Zara",
      rating: 4.2,
      numReviews: 10,
      countInStock: 20,
      description: "Popular pants",
    },
    {
      id: 6,
      name: "Classic Pants",
      slug: "classic-shirt",
      category: "Pants",
      image: "/images/pants3.jpg",
      price: 75,
      brand: "Casely",
      rating: 4.2,
      numReviews: 10,
      countInStock: 20,
      description: "A Popular pants",
    },
  ],
};

export default data;
