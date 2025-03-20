import React from "react";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { Filter, Plus } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../store/InvoiceSlice";

const status = ["all", "paid", "pending", "draft"];

export default function Header({ onNewInvoice }) {
  const dispatch = useDispatch();
  const { invoices, filter } = useSelector((state) => state.invoices);

  return (
    <header className="flex items-center justify-between mb-8">
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">Invoices</h1>
        <p className="text-slate-400">
          {invoices.length === 0
            ? "No Invoice"
            : `There are ${invoices.length} Total Invoices`}
        </p>
      </div>
      <div className="flex items-center space-x-4">
        <Menu as="div" className="relative">
          <MenuButton className="flex items-center space-x-2 text-white">
            <Filter size={20} />
            <span>Filter by Status</span>
          </MenuButton>
          <MenuItems className="absolute right-0 mt-2 w-48 bg-slate-800 rounded-lg shadow-lg p-2 z-10">
            {status.map((s) => {
              return (
                <MenuItem key={s}>
                  {({ active }) => (
                    <button
                      className={`${
                        active ? "bg-slate-700" : ""
                      } w-full text-left px-4 py-2 rounded-lg capitalize ${
                        filter === s ? "text-violet-500" : "text-white"
                      }`}
                      onClick={() => dispatch(setFilter(s))}
                    >
                      {s}
                    </button>
                  )}
                </MenuItem>
              );
            })}
          </MenuItems>
        </Menu>
        <button
          type="button"
          className="bg-violet-500 hover:bg-violet-600 text-white px-6 py-2 rounded-full flex items-center space-x-4"
          onClick={onNewInvoice}
        >
          <div className="bg-white rounded-full p-2">
            <Plus size={16} className="text-violet-500" />
          </div>
          <span>New Invoice</span>
        </button>
      </div>
    </header>
  );
}
