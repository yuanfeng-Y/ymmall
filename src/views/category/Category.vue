<template>
   <div class="wrapper">
      <ul class="content">
         <!-- li{列表消息$}*100  -->
         <li>列表消息1</li>
         <li>列表消息2</li>
         <li>列表消息3</li>
         <li>列表消息4</li>
         <li>列表消息5</li>
         <li>列表消息6</li>
         <li>列表消息7</li>
         <li>列表消息8</li>
         <li>列表消息9</li>
         <li>列表消息10</li>
         <li>列表消息11</li>
         <li>列表消息12</li>
         <li>列表消息13</li>
         <li>列表消息14</li>
         <li>列表消息15</li>
         <li>列表消息16</li>
         <li>列表消息17</li>
         <li>列表消息18</li>
         <li>列表消息19</li>
         <li>列表消息20</li>
         <li>列表消息21</li>
         <li>列表消息22</li>
         <li>列表消息23</li>
         <li>列表消息24</li>
         <li>列表消息25</li>
         <li>列表消息26</li>
         <li>列表消息27</li>
         <li>列表消息28</li>
         <li>列表消息29</li>
         <li>列表消息30</li>
         <li>列表消息31</li>
         <li>列表消息32</li>
         <li>列表消息33</li>
         <li>列表消息34</li>
         <li>列表消息35</li>
         <li>列表消息36</li>
         <li>列表消息37</li>
         <li>列表消息38</li>
         <li>列表消息39</li>
         <li>列表消息40</li>
         <li>列表消息41</li>
         <li>列表消息42</li>
         <li>列表消息43</li>
         <li>列表消息44</li>
         <li>列表消息45</li>
         <li>列表消息46</li>
         <li>列表消息47</li>
         <li>列表消息48</li>
         <li>列表消息49</li>
         <li>列表消息50</li>
         <li>列表消息51</li>
         <li>列表消息52</li>
         <li>列表消息53</li>
         <li>列表消息54</li>
         <li>列表消息55</li>
         <li>列表消息56</li>
         <li>列表消息57</li>
         <li>列表消息58</li>
         <li>列表消息59</li>
         <li>列表消息60</li>
         <li>列表消息61</li>
         <li>列表消息62</li>
         <li>列表消息63</li>
         <li>列表消息64</li>
         <li>列表消息65</li>
         <li>列表消息66</li>
         <li>列表消息67</li>
         <li>列表消息68</li>
         <li>列表消息69</li>
         <li>列表消息70</li>
         <li>列表消息71</li>
         <li>列表消息72</li>
         <li>列表消息73</li>
         <li>列表消息74</li>
         <li>列表消息75</li>
         <li>列表消息76</li>
         <li>列表消息77</li>
         <li>列表消息78</li>
         <li>列表消息79</li>
         <li>列表消息80</li>
         <li>列表消息81</li>
         <li>列表消息82</li>
         <li>列表消息83</li>
         <li>列表消息84</li>
         <li>列表消息85</li>
         <li>列表消息86</li>
         <li>列表消息87</li>
         <li>列表消息88</li>
         <li>列表消息89</li>
         <li>列表消息90</li>
         <li>列表消息91</li>
         <li>列表消息92</li>
         <li>列表消息93</li>
         <li>列表消息94</li>
         <li>列表消息95</li>
         <li>列表消息96</li>
         <li>列表消息97</li>
         <li>列表消息98</li>
         <li>列表消息99</li>
         <li>列表消息100</li>
      </ul>
   </div>
</template>

<script>
   import BScroll from 'better-scroll'

  export default {
    name: "Category",
     data() {
       return {
          scroll: null
       }
     },
     created() {
     //   new BScroll('.content', {
     //
     // })
  },
     mounted() {
       this.scroll = new BScroll(document.querySelector('.wrapper'), {

       })
     }
  }
</script>

<style scoped>
  .wrapper {
    height: 200px;
    background-color: darkcyan;

    overflow: hidden;
    /*overflow-y: scroll;*/
  }
</style>
