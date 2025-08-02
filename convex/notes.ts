
import { mutation, query } from "./_generated/server";
import {v} from "convex/values";

// 按时间排序获取所有笔记（最新的在前）
export const getNotes = query(async(ctx) => {
  return await ctx.db.query("notes")
    .order("desc")
    .collect();
})

// 创建新笔记
export const createNote = mutation({
    args: { content: v.string() },
    handler: async (ctx, args) => {
        const now = Date.now();
        return await ctx.db.insert("notes", { 
            content: args.content,
            createdAt: now,
            updatedAt: now
         });
    }
})

// 更新现有笔记
export const updateNote = mutation({
    args: { 
        id: v.id("notes"),
        content: v.string() 
    },
    handler: async (ctx, args) => {
        await ctx.db.patch(args.id, {
            content: args.content,
            updatedAt: Date.now()
        });
    }
})

// 删除笔记
export const deleteNote = mutation({
    args: { id: v.id("notes") },
    handler: async (ctx, args) => {
        await ctx.db.delete(args.id);
    }
})