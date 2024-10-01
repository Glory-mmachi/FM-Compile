"use client";
import Image from "next/image";
import React, { useState } from "react";
import { useAppContext } from "@/context";
import { motion } from "framer-motion";

export default function Page() {
  const {
    products,
    increment,
    decrement,
    totalCount,
    clickedItems,
    removeItem, // Get the removeItem function from the context
  } = useAppContext();

  // State to track which product is currently clicked
  const [clickedProductId, setClickedProductId] = useState(null);

  // Handle button click and ensure only one button is clicked at a time
  const handleButtonClick = (productId) => {
    if (clickedProductId === productId) {
      setClickedProductId(null); // Close if clicked again
    } else {
      setClickedProductId(productId); // Otherwise, set the clicked product id
    }
  };

  // Animation variants
  const buttonVariants = {
    hover: { scale: 1.1, boxShadow: "0px 4px 8px rgba(0,0,0,0.2)" },
    tap: { scale: 0.95 },
  };

  const productVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const cartVariants = {
    hidden: { x: 100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { type: "spring", stiffness: 70 } },
  };

  return (
    <section className="bg-[#FCF8F5]">
      <div className="max-w-6xl mx-auto p-[70px]">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {/* Desserts Section */}
          <div className="lg:col-span-2">
            <h1 className="font-[700] mb-5">Desserts</h1>

            <main className="flex flex-wrap gap-6">
              {products.map((product) => (
                <motion.div
                  key={product.id}
                  variants={productVariants}
                  initial="hidden"
                  animate="visible"
                  className="relative mb-5"
                >
                  <div className="relative">
                    <Image
                      className="rounded-2xl"
                      src={product.image.desktop}
                      alt={product.name}
                      width={200}
                      height={200}
                    />

                    {/* CART BUTTON */}
                    {clickedProductId === product.id ? (
                      <motion.button
                        className="absolute left-8 bottom-[-12px] flex justify-center items-center gap-6 border-2 border-red-200 px-6 py-0 rounded-2xl bg-orange-500 text-white hover:border-[3px]"
                        variants={buttonVariants}
                        whileHover="hover"
                        whileTap="tap"
                      >
                        <span>
                          <motion.div
                            className="border-2 rounded-full hover:bg-white hover:text-orange-500"
                            onClick={() => decrement(product.id)}
                          >
                            -
                          </motion.div>
                        </span>
                        {product.count}
                        <span>
                          <motion.div
                            className="border-2 rounded-full hover:bg-white hover:text-orange-500"
                            onClick={() => increment(product.id)}
                          >
                            +
                          </motion.div>
                        </span>
                      </motion.button>
                    ) : (
                      <motion.button
                        className="absolute left-8 bottom-[-12px] flex justify-center items-center gap-2 border-2 border-red-200 px-4 py-1 rounded-2xl bg-white hover:border-[3px]"
                        onClick={() => handleButtonClick(product.id)}
                        variants={buttonVariants}
                        whileHover="hover"
                        whileTap="tap"
                      >
                        <span>
                          <Image
                            src="/icon-add-to-cart.svg"
                            alt="add to cart"
                            width={20}
                            height={20}
                          />
                        </span>
                        Add to cart
                      </motion.button>
                    )}
                  </div>
                  {/* Product Text */}
                  <h3 className="text-[12px] text-[#CB866F] mt-4">
                    {product.category}
                  </h3>
                  <p className="mt-1">{product.name}</p>
                  <h2 className="text-[#CB866F]">${product.price.toFixed(2)}</h2>
                </motion.div>
              ))}
            </main>
          </div>

          {/* Cart Section */}
          <motion.div
            className="lg:col-span-1 bg-white p-8 rounded-2xl h-auto max-h-[400px]  lg:overflow-y-auto lg:mt-0 mt-6 lg:sticky lg:top-0"
            variants={cartVariants}
            initial="hidden"
            animate="visible"
          >
            <h2 className="text-[20px] text-[#CB866F] text-[700]">
              Your Cart ({totalCount})
            </h2>

            {totalCount > 0 ? (
              <ul className="flex flex-col gap-4">
                {clickedItems.map((item) => {
                  const clickedProduct = products.find((p) => p.id === item.id);
                  return (
                    <li key={item.id}>
                      {clickedProduct && (
                        <div className="flex justify-between">
                          <div>
                            <h2>{clickedProduct.name}</h2>
                            <div className="flex gap-2">
                              <p>{clickedProduct.count}X </p>
                              <p>${clickedProduct.price.toFixed(2)}</p>
                              <p>{`$${(
                                clickedProduct.count * clickedProduct.price
                              ).toFixed(2)}`}</p>
                            </div>
                          </div>
                          <button onClick={() => removeItem(item.id)}>
                            <Image
                              src="/icon-remove-item.svg"
                              alt="remove item"
                              width={20}
                              height={20}
                            />
                          </button>
                        </div>
                      )}
                    </li>
                  );
                })}

                {/* Calculate total price */}
                <div className="flex justify-between mt-5">
                  <p>Total:</p>
                  <p>
                    $
                    {clickedItems
                      .reduce((acc, item) => {
                        const clickedProduct = products.find(
                          (p) => p.id === item.id
                        );
                        return clickedProduct
                          ? acc + clickedProduct.price * item.count
                          : acc;
                      }, 0)
                      .toFixed(2)}
                  </p>
                </div>

                {/* Confirm Order button */}
                <motion.button
                  className="mt-5 w-full bg-[#CB866F] text-white py-3 rounded-full hover:bg-[#a55c4e] transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Confirm Order
                </motion.button>
              </ul>
            ) : (
              <div className="flex flex-col gap-4 mt-5">
                <Image
                  src="/icon-add-to-cart.svg"
                  width={200}
                  height={200}
                  alt="empty cart"
                />
                <p className="text-center text-[#CB866F]">
                  Your Order will appear here
                </p>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
