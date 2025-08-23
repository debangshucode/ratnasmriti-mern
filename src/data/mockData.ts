export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  images?: string[];
  category: string;
  categoryId: string;
  description?: string;
  isNew?: boolean;
  isSale?: boolean;
  inStock?: boolean;
  specifications?: Record<string, string>;
}

export interface Category {
  id: string;
  name: string;
  image: string;
  productCount: number;
  description?: string;
}

export interface Blog {
  id: string;
  title: string;
  excerpt: string;
  content?: string;
  image: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
}

export const mockCategories: Category[] = [
  {
    id: 'rings',
    name: 'Rings',
    image: 'https://images.pexels.com/photos/1721932/pexels-photo-1721932.jpeg?auto=compress&cs=tinysrgb&w=400',
    productCount: 45,
    description: 'Elegant rings for every occasion'
  },
  {
    id: 'necklaces',
    name: 'Necklaces',
    image: 'https://images.pexels.com/photos/1454166/pexels-photo-1454166.jpeg?auto=compress&cs=tinysrgb&w=400',
    productCount: 32,
    description: 'Beautiful necklaces to complement your style'
  },
  {
    id: 'earrings',
    name: 'Earrings',
    image: 'https://images.pexels.com/photos/1445335/pexels-photo-1445335.jpeg?auto=compress&cs=tinysrgb&w=400',
    productCount: 28,
    description: 'Stunning earrings for every look'
  },
  {
    id: 'bracelets',
    name: 'Bracelets',
    image: 'https://images.pexels.com/photos/1461689/pexels-photo-1461689.jpeg?auto=compress&cs=tinysrgb&w=400',
    productCount: 21,
    description: 'Graceful bracelets and bangles'
  },
  {
    id: 'watches',
    name: 'Watches',
    image: 'https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?auto=compress&cs=tinysrgb&w=400',
    productCount: 16,
    description: 'Luxury timepieces'
  },
  {
    id: 'sets',
    name: 'Jewelry Sets',
    image: 'https://images.pexels.com/photos/1472443/pexels-photo-1472443.jpeg?auto=compress&cs=tinysrgb&w=400',
    productCount: 12,
    description: 'Complete jewelry collections'
  }
];

export const mockProducts: Product[] = [
  {
    id: '1',
    name: 'Diamond Solitaire Engagement Ring',
    price: 2499.99,
    originalPrice: 2999.99,
    image: 'https://images.pexels.com/photos/1721932/pexels-photo-1721932.jpeg?auto=compress&cs=tinysrgb&w=400',
    images: [
      'https://images.pexels.com/photos/1721932/pexels-photo-1721932.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1454166/pexels-photo-1454166.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'Rings',
    categoryId: 'rings',
    description: 'A timeless classic featuring a brilliant-cut diamond set in 18k white gold.',
    isNew: true,
    isSale: true,
    inStock: true,
    specifications: {
      'Metal': '18k White Gold',
      'Diamond Weight': '1.5 Carats',
      'Cut': 'Round Brilliant',
      'Clarity': 'VS1',
      'Color': 'G'
    }
  },
  {
    id: '2',
    name: 'Pearl Statement Necklace',
    price: 899.99,
    image: 'https://images.pexels.com/photos/1454166/pexels-photo-1454166.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Necklaces',
    categoryId: 'necklaces',
    description: 'Elegant freshwater pearl necklace with gold accents.',
    isNew: true,
    inStock: true,
    specifications: {
      'Metal': '14k Gold',
      'Pearl Type': 'Freshwater',
      'Length': '18 inches',
      'Pearl Size': '8-10mm'
    }
  },
  {
    id: '3',
    name: 'Rose Gold Drop Earrings',
    price: 649.99,
    originalPrice: 799.99,
    image: 'https://images.pexels.com/photos/1445335/pexels-photo-1445335.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Earrings',
    categoryId: 'earrings',
    description: 'Beautiful rose gold earrings with cubic zirconia.',
    isSale: true,
    inStock: true,
    specifications: {
      'Metal': '14k Rose Gold',
      'Gemstone': 'Cubic Zirconia',
      'Length': '2 inches',
      'Style': 'Drop Earrings'
    }
  },
  {
    id: '4',
    name: 'Tennis Bracelet',
    price: 1299.99,
    image: 'https://images.pexels.com/photos/1461689/pexels-photo-1461689.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Bracelets',
    categoryId: 'bracelets',
    description: 'Classic tennis bracelet with brilliant diamonds.',
    inStock: true,
    specifications: {
      'Metal': '14k White Gold',
      'Total Diamond Weight': '2 Carats',
      'Length': '7 inches',
      'Clasp': 'Safety Clasp'
    }
  },
  {
    id: '5',
    name: 'Luxury Gold Watch',
    price: 3299.99,
    image: 'https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Watches',
    categoryId: 'watches',
    description: 'Swiss-made luxury timepiece with gold plating.',
    inStock: true,
    specifications: {
      'Movement': 'Swiss Quartz',
      'Case Material': '18k Gold Plated',
      'Water Resistance': '50m',
      'Diameter': '40mm'
    }
  },
  {
    id: '6',
    name: 'Bridal Jewelry Set',
    price: 1899.99,
    originalPrice: 2299.99,
    image: 'https://images.pexels.com/photos/1472443/pexels-photo-1472443.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Jewelry Sets',
    categoryId: 'sets',
    description: 'Complete bridal set including necklace, earrings, and bracelet.',
    isSale: true,
    inStock: true,
    specifications: {
      'Metal': '14k White Gold',
      'Gemstone': 'Diamonds & Pearls',
      'Pieces Included': '3 (Necklace, Earrings, Bracelet)',
      'Style': 'Bridal Collection'
    }
  },
  {
    id: '7',
    name: 'Vintage Sapphire Ring',
    price: 1799.99,
    image: 'https://images.pexels.com/photos/1721932/pexels-photo-1721932.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Rings',
    categoryId: 'rings',
    description: 'Vintage-inspired sapphire ring with diamond accents.',
    inStock: true,
    specifications: {
      'Metal': '18k White Gold',
      'Center Stone': 'Blue Sapphire',
      'Accent Stones': 'Diamonds',
      'Era': 'Art Deco Inspired'
    }
  },
  {
    id: '8',
    name: 'Emerald Chain Necklace',
    price: 1199.99,
    image: 'https://images.pexels.com/photos/1454166/pexels-photo-1454166.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Necklaces',
    categoryId: 'necklaces',
    description: 'Elegant emerald necklace with gold chain.',
    inStock: true,
    specifications: {
      'Metal': '14k Yellow Gold',
      'Gemstone': 'Natural Emerald',
      'Chain Length': '20 inches',
      'Pendant Size': '12x8mm'
    }
  }
];

export const mockBlogs: Blog[] = [
  {
    id: '1',
    title: 'How to Choose the Perfect Engagement Ring',
    excerpt: 'A comprehensive guide to selecting the ideal engagement ring for your loved one.',
    image: 'https://images.pexels.com/photos/1721932/pexels-photo-1721932.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Buying Guide',
    author: 'Sarah Wilson',
    date: 'March 15, 2024',
    readTime: '5 min read',
    content: 'Choosing an engagement ring is one of the most important purchases you\'ll ever make. Here\'s everything you need to know about selecting the perfect ring that will symbolize your love and commitment...'
  },
  {
    id: '2',
    title: 'Jewelry Care Tips for Lasting Brilliance',
    excerpt: 'Keep your precious jewelry looking beautiful with these professional care tips.',
    image: 'https://images.pexels.com/photos/1454166/pexels-photo-1454166.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Care Guide',
    author: 'Michael Chen',
    date: 'March 10, 2024',
    readTime: '3 min read',
    content: 'Proper jewelry care ensures your precious pieces maintain their beauty for years to come. Learn the best practices for cleaning and storing different types of jewelry...'
  },
  {
    id: '3',
    title: '2024 Jewelry Trends You Need to Know',
    excerpt: 'Discover the latest jewelry trends that are making waves this year.',
    image: 'https://images.pexels.com/photos/1445335/pexels-photo-1445335.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Trends',
    author: 'Emily Davis',
    date: 'March 5, 2024',
    readTime: '4 min read',
    content: 'From bold statement pieces to delicate minimalist designs, 2024 brings exciting new trends to the jewelry world. Here are the key trends to watch...'
  },
  {
    id: '4',
    title: 'The History of Royal Jewelry',
    excerpt: 'Explore the fascinating history behind some of the world\'s most famous royal jewelry pieces.',
    image: 'https://images.pexels.com/photos/1472443/pexels-photo-1472443.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'History',
    author: 'David Wilson',
    date: 'February 28, 2024',
    readTime: '6 min read',
    content: 'Royal jewelry has always captured our imagination with its grandeur and historical significance. Let\'s journey through the most iconic pieces worn by royalty...'
  },
  {
    id: '5',
    title: 'Understanding Diamond Grades',
    excerpt: 'Learn about the 4 Cs of diamonds and how they affect quality and price.',
    image: 'https://images.pexels.com/photos/1721932/pexels-photo-1721932.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Education',
    author: 'Lisa Martinez',
    date: 'February 20, 2024',
    readTime: '7 min read',
    content: 'Understanding diamond grading is crucial when making an investment in diamond jewelry. The 4 Cs - Cut, Color, Clarity, and Carat weight - determine a diamond\'s quality and value...'
  }
];