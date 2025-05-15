<template>
    <Layout>
        <div class="flex justify-between items-center gap-4 mb-[22px] flex-wrap">
            <h1 class="text-dark-800 font-bold text-display-sm">Title</h1>
            <div class="flex items-center gap-4 flex-wrap">
                <div class="flex items-center gap-4 flex-wrap">
                    <ul class="flex items-center gap-4 flex-wrap">
                        <li class="flex items-center gap-[6px]">
                            Type 1
                            <button>
                                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_4079_43877)"><path fill-rule="evenodd" clip-rule="evenodd" d="M6.00569 7.34603L9.37334 10.7098C9.55204 10.8883 9.79441 10.9886 10.0471 10.9886C10.2998 10.9886 10.5422 10.8883 10.7209 10.7098C10.8996 10.5313 11 10.2893 11 10.0368C11 9.78439 10.8996 9.5423 10.7209 9.36381L7.35199 6L10.7203 2.63619C10.8087 2.54781 10.8789 2.44289 10.9267 2.32743C10.9746 2.21197 10.9992 2.08823 10.9991 1.96327C10.9991 1.83831 10.9744 1.71458 10.9265 1.59914C10.8786 1.4837 10.8084 1.37882 10.72 1.29048C10.6315 1.20214 10.5264 1.13207 10.4108 1.08428C10.2953 1.03648 10.1714 1.0119 10.0463 1.01193C9.92116 1.01196 9.79729 1.0366 9.68172 1.08445C9.56615 1.1323 9.46115 1.20241 9.37271 1.2908L6.00569 4.6546L2.63805 1.2908C2.55022 1.19988 2.44514 1.12734 2.32895 1.07742C2.21276 1.0275 2.08777 1.0012 1.96129 1.00004C1.83481 0.998883 1.70937 1.0229 1.59228 1.07068C1.47519 1.11847 1.3688 1.18907 1.27932 1.27837C1.18984 1.36766 1.11906 1.47386 1.07111 1.59077C1.02315 1.70768 0.998993 1.83296 1.00003 1.9593C1.00107 2.08564 1.02729 2.2105 1.07716 2.32661C1.12702 2.44272 1.19954 2.54774 1.29048 2.63556L4.6594 6L1.29112 9.36444C1.20018 9.45226 1.12766 9.55728 1.07779 9.67339C1.02792 9.7895 1.00171 9.91436 1.00067 10.0407C0.999628 10.167 1.02379 10.2923 1.07174 10.4092C1.11969 10.5261 1.19047 10.6323 1.27995 10.7216C1.36943 10.8109 1.47582 10.8815 1.59291 10.9293C1.71 10.9771 1.83545 11.0011 1.96193 11C2.08841 10.9988 2.21339 10.9725 2.32958 10.9226C2.44578 10.8727 2.55085 10.8001 2.63868 10.7092L6.00569 7.34603Z" fill="#0A0C11"/></g><defs><clipPath id="clip0_4079_43877"><rect width="10" height="10" fill="white" transform="translate(1 1)"/></clipPath></defs></svg>
                            </button>
                        </li>
                        <li class="flex items-center gap-[6px]">
                            Type 3
                            <button>
                                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_4079_43877)"><path fill-rule="evenodd" clip-rule="evenodd" d="M6.00569 7.34603L9.37334 10.7098C9.55204 10.8883 9.79441 10.9886 10.0471 10.9886C10.2998 10.9886 10.5422 10.8883 10.7209 10.7098C10.8996 10.5313 11 10.2893 11 10.0368C11 9.78439 10.8996 9.5423 10.7209 9.36381L7.35199 6L10.7203 2.63619C10.8087 2.54781 10.8789 2.44289 10.9267 2.32743C10.9746 2.21197 10.9992 2.08823 10.9991 1.96327C10.9991 1.83831 10.9744 1.71458 10.9265 1.59914C10.8786 1.4837 10.8084 1.37882 10.72 1.29048C10.6315 1.20214 10.5264 1.13207 10.4108 1.08428C10.2953 1.03648 10.1714 1.0119 10.0463 1.01193C9.92116 1.01196 9.79729 1.0366 9.68172 1.08445C9.56615 1.1323 9.46115 1.20241 9.37271 1.2908L6.00569 4.6546L2.63805 1.2908C2.55022 1.19988 2.44514 1.12734 2.32895 1.07742C2.21276 1.0275 2.08777 1.0012 1.96129 1.00004C1.83481 0.998883 1.70937 1.0229 1.59228 1.07068C1.47519 1.11847 1.3688 1.18907 1.27932 1.27837C1.18984 1.36766 1.11906 1.47386 1.07111 1.59077C1.02315 1.70768 0.998993 1.83296 1.00003 1.9593C1.00107 2.08564 1.02729 2.2105 1.07716 2.32661C1.12702 2.44272 1.19954 2.54774 1.29048 2.63556L4.6594 6L1.29112 9.36444C1.20018 9.45226 1.12766 9.55728 1.07779 9.67339C1.02792 9.7895 1.00171 9.91436 1.00067 10.0407C0.999628 10.167 1.02379 10.2923 1.07174 10.4092C1.11969 10.5261 1.19047 10.6323 1.27995 10.7216C1.36943 10.8109 1.47582 10.8815 1.59291 10.9293C1.71 10.9771 1.83545 11.0011 1.96193 11C2.08841 10.9988 2.21339 10.9725 2.32958 10.9226C2.44578 10.8727 2.55085 10.8001 2.63868 10.7092L6.00569 7.34603Z" fill="#0A0C11"/></g><defs><clipPath id="clip0_4079_43877"><rect width="10" height="10" fill="white" transform="translate(1 1)"/></clipPath></defs></svg>
                            </button>
                        </li>
                    </ul>
                    <div class="relative">
                        <button @click="showFilters = !showFilters" class="bg-[#090909] text-white font-semibold py-2 px-4 flex items-center justify-center gap-2 rounded-full">
                            Filter
                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 1.9C0 1.66131 0.0948212 1.43239 0.263604 1.2636C0.432387 1.09482 0.661305 1 0.9 1H11.1C11.3387 1 11.5676 1.09482 11.7364 1.2636C11.9052 1.43239 12 1.66131 12 1.9C12 2.13869 11.9052 2.36761 11.7364 2.5364C11.5676 2.70518 11.3387 2.8 11.1 2.8H0.9C0.661305 2.8 0.432387 2.70518 0.263604 2.5364C0.0948212 2.36761 0 2.13869 0 1.9ZM2.4 5.5C2.4 5.26131 2.49482 5.03239 2.6636 4.8636C2.83239 4.69482 3.06131 4.6 3.3 4.6H8.7C8.93869 4.6 9.16761 4.69482 9.3364 4.8636C9.50518 5.03239 9.6 5.26131 9.6 5.5C9.6 5.7387 9.50518 5.96761 9.3364 6.1364C9.16761 6.30518 8.93869 6.4 8.7 6.4H3.3C3.06131 6.4 2.83239 6.30518 2.6636 6.1364C2.49482 5.96761 2.4 5.7387 2.4 5.5ZM5.1 8.2C4.86131 8.2 4.63239 8.29482 4.4636 8.4636C4.29482 8.63239 4.2 8.86131 4.2 9.1C4.2 9.3387 4.29482 9.56761 4.4636 9.7364C4.63239 9.90518 4.86131 10 5.1 10H6.9C7.1387 10 7.36761 9.90518 7.5364 9.7364C7.70518 9.56761 7.8 9.3387 7.8 9.1C7.8 8.86131 7.70518 8.63239 7.5364 8.4636C7.36761 8.29482 7.1387 8.2 6.9 8.2H5.1Z" fill="white" /></svg>
                        </button>
                        <div v-if="showFilters" class="filter-dropdown absolute mt-[6px] bg-white rounded-2xl shadow-400 z-10 overflow-hidden">
                            <div class="flex items-start gap-4 py-[15px] px-4">
                                <input type="checkbox" id="filterAll" class="custom-checkbox" />
                                <label for="filterAll" class="cursor-pointer">
                                    All
                                </label>
                            </div>
                            <div class="flex items-start gap-4 py-[15px] px-4">
                                <input type="checkbox" id="filterType1" class="custom-checkbox" checked />
                                <label for="filterType1" class="cursor-pointer">
                                    Type1
                                </label>
                            </div>
                            <div class="flex items-start gap-4 py-[15px] px-4">
                                <input type="checkbox" id="filterType2" class="custom-checkbox" />
                                <label for="filterType2" class="cursor-pointer">
                                    Type2
                                </label>
                            </div>
                            <div class="flex items-start gap-4 py-[15px] px-4">
                                <input type="checkbox" id="filterType3" class="custom-checkbox" checked />
                                <label for="filterType3" class="cursor-pointer">
                                    Type3
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
                <button @click="showModal = true" class="btn btn-primary">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_16076_1513)"><path d="M12.75 8H2.75M7.75 3V13" stroke="white" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round"/></g><defs><clipPath id="clip0_16076_1513"><rect width="16" height="16" fill="white"/></clipPath></defs></svg>
                    <span>Add New</span>
                </button>
            </div>
        </div>
        <div class="grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 gap-x-6 gap-y-[22px]">
            <div class="bg-white rounded-2xl sm:p-[22px] p-4 flex flex-col sm:gap-[22px] gap-4">
                <h3 class="font-semibold text-[17px]/[22px]">Lorem ipsum dolor sit amet</h3>
                <img src="/assets/images/card1.jpg" alt="card1" class="w-full bg-[#D9D9D9] rounded-xl">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, ...</p>
            </div>
            <div class="bg-white rounded-2xl sm:p-[22px] p-4 flex flex-col sm:gap-[22px] gap-4">
                <h3 class="font-semibold text-[17px]/[22px]">Lorem ipsum dolor sit amet</h3>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                    <br><br> Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                    <br><br> Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </div>
            <div class="bg-white rounded-2xl sm:p-[22px] p-4 flex flex-col sm:gap-[22px] gap-4">
                <h3 class="font-semibold text-[17px]/[22px]">Lorem ipsum dolor sit amet</h3>
                <img src="/assets/images/card2.jpg" alt="card2" class="w-full bg-[#D9D9D9] rounded-xl">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, ...</p>
            </div>
            <div class="bg-white rounded-2xl sm:p-[22px] p-4 flex flex-col sm:gap-[22px] gap-4">
                <h3 class="font-semibold text-[17px]/[22px]">Lorem ipsum dolor sit amet</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <ul class="flex flex-col gap-3">
                    <li>
                        <div class="flex items-start gap-2">
                            <input type="checkbox" id="check1" class="custom-checkbox" checked />
                            <label for="check1" class="cursor-pointer">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                            </label>
                        </div>
                    </li>
                    <li>
                        <div class="flex items-start gap-2">
                            <input type="checkbox" id="check2" class="custom-checkbox" />
                            <label for="check2" class="cursor-pointer">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                            </label>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="bg-white rounded-2xl sm:p-[22px] p-4 flex flex-col sm:gap-[22px] gap-4">
                <h3 class="font-semibold text-[17px]/[22px]">Lorem ipsum dolor sit amet</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <ul class="flex flex-col gap-3">
                    <li>
                        <div class="flex items-start gap-2">
                            <input type="checkbox" id="check3" class="custom-checkbox" checked />
                            <label for="check3" class="cursor-pointer">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                            </label>
                        </div>
                    </li>
                    <li>
                        <div class="flex items-start gap-2">
                            <input type="checkbox" id="check4" class="custom-checkbox" />
                            <label for="check4" class="cursor-pointer">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                            </label>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="bg-white rounded-2xl sm:p-[22px] p-4 flex flex-col sm:gap-[22px] gap-4">
                <h3 class="font-semibold text-[17px]/[22px]">Lorem ipsum dolor sit amet</h3>
                <img src="/assets/images/card3.jpg" alt="card3" class="w-full bg-[#D9D9D9] rounded-xl">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, ...</p>
            </div>
            <div class="bg-white rounded-2xl sm:p-[22px] p-4 flex flex-col sm:gap-[22px] gap-4">
                <h3 class="font-semibold text-[17px]/[22px]">Lorem ipsum dolor sit amet</h3>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                    <br><br> Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                    <br><br> Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </div>
            <div class="bg-white rounded-2xl sm:p-[22px] p-4 flex flex-col sm:gap-[22px] gap-4">
                <h3 class="font-semibold text-[17px]/[22px]">Lorem ipsum dolor sit amet</h3>
                <img src="/assets/images/card4.jpg" alt="card4" class="w-full bg-[#D9D9D9] rounded-xl">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, ...</p>
            </div>
            <div class="bg-white rounded-2xl sm:p-[22px] p-4 flex flex-col sm:gap-[22px] gap-4">
                <h3 class="font-semibold text-[17px]/[22px]">Lorem ipsum dolor sit amet</h3>
                <img src="/assets/images/card1.jpg" alt="card1" class="w-full bg-[#D9D9D9] rounded-xl">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, ...</p>
            </div>
            <div class="bg-white rounded-2xl sm:p-[22px] p-4 flex flex-col sm:gap-[22px] gap-4">
                <h3 class="font-semibold text-[17px]/[22px]">Lorem ipsum dolor sit amet</h3>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                    <br><br> Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                    <br><br> Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </div>
            <div class="bg-white rounded-2xl sm:p-[22px] p-4 flex flex-col sm:gap-[22px] gap-4">
                <h3 class="font-semibold text-[17px]/[22px]">Lorem ipsum dolor sit amet</h3>
                <img src="/assets/images/card2.jpg" alt="card2" class="w-full bg-[#D9D9D9] rounded-xl">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, ...</p>
            </div>
            <div class="bg-white rounded-2xl sm:p-[22px] p-4 flex flex-col sm:gap-[22px] gap-4">
                <h3 class="font-semibold text-[17px]/[22px]">Lorem ipsum dolor sit amet</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <ul class="flex flex-col gap-3">
                    <li>
                        <div class="flex items-start gap-2">
                            <input type="checkbox" id="check5" class="custom-checkbox" checked />
                            <label for="check5" class="cursor-pointer">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                            </label>
                        </div>
                    </li>
                    <li>
                        <div class="flex items-start gap-2">
                            <input type="checkbox" id="check6" class="custom-checkbox" />
                            <label for="check6" class="cursor-pointer">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                            </label>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <AddNoteModal :show="showModal" @close="showModal = false" />
    </Layout>
</template>

<script setup>
import { ref } from 'vue'
import Layout from '@/layouts/Layout.vue'
// import NoteCard from '@/components/NoteCard.vue'
import AddNoteModal from '@/components/AddNoteModal.vue'
// import { useNoteStore } from '@/stores/noteStore'

const showFilters = ref(false)
// const store = useNoteStore()
const showModal = ref(false)
</script>