import React from 'react'
import { CartItemType } from "../types/ComponentTypes"
import { X } from "lucide-react"

export default function CartItem({ mealName, quantity, price}: CartItemType) {
  return (
    <div className="flex flex-col space-y-2 py-2">
      <h2 className="font-semibold ml-10">{mealName}</h2>
      <div className="flex items-center justify-between mr-6">
        <div className="flex items-center space-x-4 ml-10">
          <span className="text-sm font-medium text-red-700">{quantity}x</span>
          <span className="text-sm font-medium">${price.toFixed(2)}</span>
        </div>
      
          <X className="h-4 w-4" />
     
      </div>
      <div className="h-px bg-gray-200 w-full" aria-hidden="true"></div>
    </div>


  )
}