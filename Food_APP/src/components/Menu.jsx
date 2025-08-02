import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Import your local images
import img1 from '../assets/img1.avif';
import img2 from '../assets/img2.avif';
import img3 from '../assets/img3.avif';
import img4 from '../assets/img4.avif';
import img5 from '../assets/img5.avif';
import img6 from '../assets/img6.avif';
import drink1 from '../assets/drink1.avif';
import drink2 from '../assets/drink2.avif';
import drink3 from '../assets/drink3.avif';
import muffin from '../assets/pexels-muffin-1653877.jpg';
import grizzlybear from '../assets/pexels-grizzlybear-1166120.jpg';
import brettjordan from '../assets/pexels-brettjordan-825661.jpg';

gsap.registerPlugin(ScrollTrigger);

// Reusable Product Card Component
const ProductCard = ({ product, onAddToCart }) => {
  const cardRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(cardRef.current,
      { y: 50, opacity: 0, scale: 0.9 },
      { 
        y: 0, 
        opacity: 1, 
        scale: 1, 
        duration: 0.6, 
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse"
        }
      }
    );
  }, []);

  return (
    <div 
      ref={cardRef}
      className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group"
    >
      {/* Product Image - REPLACED EMOJI WITH ACTUAL IMAGES */}
      <div className="relative h-48 overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          onError={(e) => {
            e.target.style.backgroundColor = '#f3f4f6';
            e.target.style.display = 'flex';
            e.target.style.alignItems = 'center';
            e.target.style.justifyContent = 'center';
            e.target.innerHTML = '<span style="color: #6b7280; font-size: 14px;">Loading...</span>';
          }}
        />
        
        {/* Discount Badge */}
        {product.discount && (
          <div className="absolute top-4 right-4 bg-gradient-to-r from-orange-600 to-red-600 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg">
            -{product.discount}%
          </div>
        )}
      </div>

      {/* Product Info */}
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors duration-300">
          {product.name}
        </h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {product.description}
        </p>
        
        {/* Price and Add to Cart */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            {product.discount ? (
              <>
                <span className="text-2xl font-bold text-orange-600">
                  ${product.discountedPrice}
                </span>
                <span className="text-gray-400 line-through">
                  ${product.price}
                </span>
              </>
            ) : (
              <span className="text-2xl font-bold text-orange-600">
                ${product.price}
              </span>
            )}
          </div>
          
          <button 
            onClick={() => onAddToCart(product)}
            className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 transform hover:scale-105"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

const Menu = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const categoriesRef = useRef(null);

  const [activeCategory, setActiveCategory] = useState('pizza');

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse"
      }
    });

    // Animate title
    tl.fromTo(titleRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }
    );

    // Animate categories
    tl.fromTo(categoriesRef.current,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
      "-=0.4"
    );

  }, []);

  const categories = [
    { id: 'pizza', name: 'Pizzas', icon: '🍕' },
    { id: 'drinks', name: 'Beverages', icon: '🧃' },
    { id: 'combos', name: 'Combos', icon: '🍽️' }
  ];

  // UPDATED PRODUCTS WITH YOUR ACTUAL IMAGES
  const products = {
    pizza: [
      {
        id: 1,
        name: "Margherita Classic",
        description: "Fresh mozzarella, tomato sauce, and basil on our signature crust",
        price: 18.99,
        discountedPrice: 15.99,
        discount: 15,
        image: img1  // ← REPLACED icon with image
      },
      {
        id: 2,
        name: "Pepperoni Supreme",
        description: "Spicy pepperoni with melted cheese and our special sauce",
        price: 22.99,
        discountedPrice: 19.99,
        discount: 13,
        image: img2  // ← REPLACED icon with image
      },
      {
        id: 3,
        name: "Veggie Delight",
        description: "Fresh vegetables, mushrooms, and olives on whole wheat crust",
        price: 20.99,
        image: img3  // ← REPLACED icon with image
      },
      {
        id: 4,
        name: "BBQ Chicken",
        description: "Grilled chicken with BBQ sauce, red onions, and cilantro",
        price: 24.99,
        image: img4  // ← REPLACED icon with image
      }
    ],
    drinks: [
      {
        id: 5,
        name: "Fresh Orange Juice",
        description: "Hand-squeezed oranges with a hint of freshness",
        price: 4.99,
        image: drink1  // ← REPLACED icon with image
      },
      {
        id: 6,
        name: "Berry Smoothie",
        description: "Mixed berries with yogurt and honey",
        price: 6.99,
        discountedPrice: 5.99,
        discount: 14,
        image: drink2  // ← REPLACED icon with image
      },
      {
        id: 7,
        name: "Iced Coffee",
        description: "Cold brew with cream and vanilla",
        price: 5.99,
        image: drink3  // ← REPLACED icon with image
      },
      {
        id: 8,
        name: "Fresh Lemonade",
        description: "Hand-squeezed lemons with a hint of mint",
        price: 3.99,
        image: drink1  // ← Using drink1 again
      }
    ],
    combos: [
      {
        id: 9,
        name: "Pizza + Drink Combo",
        description: "Any medium pizza with your choice of beverage",
        price: 24.99,
        discountedPrice: 21.99,
        discount: 12,
        image: grizzlybear  // ← REPLACED icon with image
      },
      {
        id: 10,
        name: "Family Pack",
        description: "2 large pizzas, 2 sides, and 4 drinks",
        price: 49.99,
        discountedPrice: 44.99,
        discount: 10,
        image: brettjordan  // ← REPLACED icon with image
      },
      {
        id: 11,
        name: "Lunch Special",
        description: "Personal pizza with salad and drink",
        price: 14.99,
        image: img5  // ← REPLACED icon with image
      },
      {
        id: 12,
        name: "Dessert Combo",
        description: "Chocolate muffin with coffee or smoothie",
        price: 12.99,
        discountedPrice: 10.99,
        discount: 15,
        image: muffin  // ← REPLACED icon with image
      }
    ]
  };

  const handleAddToCart = (product) => {
    // Add to cart functionality
    console.log('Added to cart:', product);
    // You can implement cart state management here
  };

  return (
    <section ref={sectionRef} id="menu" className="section-padding bg-gray-50">
      <div className="container-custom">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 
            ref={titleRef}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
          >
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600">Menu</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our handcrafted pizzas, refreshing beverages, and amazing combo deals
          </p>
        </div>

        {/* Category Tabs */}
        <div ref={categoriesRef} className="flex justify-center mb-12">
          <div className="bg-white rounded-full p-2 shadow-lg">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                  activeCategory === category.id
                    ? 'bg-gradient-to-r from-orange-600 to-red-600 text-white shadow-lg'
                    : 'text-gray-600 hover:text-orange-600'
                }`}
              >
                <span className="mr-2">{category.icon}</span>
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products[activeCategory].map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={handleAddToCart}
            />
          ))}
        </div>

        {/* View Full Menu Button */}
        <div className="text-center mt-16">
          <button 
            className="bg-gradient-to-r from-orange-600 to-red-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            onClick={() => {
              console.log('View Full Menu clicked');
            }}
          >
            View Full Menu & Order Online
          </button>
        </div>
      </div>
    </section>
  );
};

export default Menu;