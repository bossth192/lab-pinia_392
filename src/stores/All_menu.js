import { ref } from 'vue';
import { defineStore } from 'pinia'

export const menuStore = defineStore('menu', () => {

const menu_list=ref([
    {name:'RG RX-78-2 GUNDAM', img:"https://da.lnwfile.com/_/da/_fit/250/250/lf/lx/n6.jpg", price:850},
    {name:'RG MS-06S ZAKU II', img:"https://da.lnwfile.com/_/da/_fit/250/250/3o/6o/v7.jpg", price:750 },
    {name:'RG AILE STRIKE GUNDAM', img:"https://da.lnwfile.com/_/da/_fit/250/250/70/mu/27.jpg", price:850 },
    {name:'RG MS-06F ZAKU II', img:"https://da.lnwfile.com/_/da/_fit/250/250/vp/xm/3v.jpg", price:800 },
    {name:'RG FREEDOM GUNDAM', img:"https://da.lnwfile.com/_/da/_fit/250/250/t0/ey/f5.jpg", price:850 },
    {name:'RG JUSTICE GUNDAM', img:"https://da.lnwfile.com/_/da/_fit/250/250/cs/mn/ul.jpg", price:1020 },
    {name:'RG WING GUNDAM ZERO EW', img:"https://da.lnwfile.com/_/da/_fit/250/250/re/5d/6o.jpg", price:850 },
    {name:'RG 00 RAISER', img:"https://da.lnwfile.com/_/da/_fit/250/250/03/zq/6q.jpg", price:1020 },
    {name:'RG MSN-06S SINANJU', img:"https://da.lnwfile.com/_/da/_fit/250/250/q3/qk/tt.jpg", price:1290 },
    {name:'RG UNICORN GUNDAM 02 BANSHEE NORN', img:"https://da.lnwfile.com/_/da/_fit/250/250/tx/97/4j.jpg", price:1360 },
    {name:'RG FULL ARMOR UNICORN GUNDAM', img:"https://da.lnwfile.com/_/da/_fit/250/250/rp/3u/nx.jpg", price:1840 },
    {name:'RG RX-93FF NU GUNDAM', img:"https://da.lnwfile.com/_/da/_fit/250/250/oq/sm/o0.jpg", price:2390 },
])

return { menu_list }
})



