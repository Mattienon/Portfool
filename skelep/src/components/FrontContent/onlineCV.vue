<template>   
  <div class="absolute">
    <div class="container">  
      <h1>{{ pageTitle }}</h1>
      <h2>{{ subTitle }}</h2>
      <div class="row">
        <!-- First column for accordion section -->
        <div class="col-md-6">
          <div class="accordion-container">
            <div class="accordion accordion-flush" id="accordionFlushExample">
              <div v-for="(item, index) in accordionItems" :key="index" class="accordion-item">
                <h2 class="accordion-header">
                  <button
                    class="accordion-button"
                    type="button"
                    :class="{ collapsed: !item.expanded,
                      'box1': item.title === 'Experience',
                      'box2': item.title === 'Volunteer',
                      'box3': item.title === 'Education' }"
                    @click="toggleAccordion(index)"
                  >
                    {{ item.title }}
                  </button>
                </h2>
                <div :id="'flush-collapse-' + index" class="accordion-collapse collapse" :class="{ show: item.expanded }">
                  <div class="accordion-body">
                    <ul>
                      <li v-for="(entry, i) in item.entries" :key="i">
                        <h3>{{ entry.title }}</h3>
                        <p>{{ entry.workTitle }}</p>
                        <p>{{ entry.date }}</p>
                        <p>{{ entry.description }}</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Second column for content -->
        <div class="col-md-6">
          <div class="boxdecor">
            <div class="content">
              <h1 class="big-title">{{ bigTitle }}</h1>
              <div class="about-me">
                <p v-if="!showMore" v-text="shortText" class="short-text"></p>
                <p v-if="showMore" v-text="longText" class="long-text"></p>
                <button class="btn btn-outline-dark read-more-btn" @click="toggleShowMore">
                  {{ showMore ? 'Rock off?' : 'Rock on?' }}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';


const pageTitle = ref("Online CV");
const subTitle = ref("Since you want to know so much about me");


const shortText = ref('A little About me');
const longText = ref(`My name is Mathilde, a highly motivated and creative individual.\n
I strive to learn new things every day and understand different cultures with an exploratory approach.\n
Creativity is my passion, and I enjoy expressing it through various forms of art.\n
My passion lies in working with people, psychology, and communication, which has led me to engage in volunteer work and event planning, both locally and abroad.\n
Professionally, I thrive in leadership, group, and solo work, and I'm constantly seeking opportunities for personal and professional development.\n
With skills in programs like After Effects, InDesign, and Illustrator, I bring creativity, a positive mindset, and ambition to every project.\n
In addition to my professional interests, I find joy in a variety of creative activities, including baking, drawing, digital art, gaming, singing, and dancing.\n
Throughout my career, I have succeeded in promoting well-being, teamwork, and leadership across various industries, including au pair work, substitute teaching in kindergarten, and roles in retail and volunteer work.`);
const showMore = ref(false);

const toggleShowMore = () => {
  showMore.value = !showMore.value;
};

// Experience Array
const experienceList = ref([
  {
    id: 1,
    title: 'Brugsen Skjern',
    workTitle: 'Café/Cashier',
    date: '2015-2016',
  },
  {
    id: 2,
    title: 'Brugsen Tjæreborg',
    workTitle: 'Bakery, Cashier & Management',
    date: '2017-2022',
    description: 'I held various roles here gaining more responsibility.',
  },
  {
    id: 3,
    title: 'Au Pair Austria',
    workTitle: 'Au Pair, Essential house chores',
    date: 'April-August 2021',
    description: 'Responsible for 2 boy aged 5 & 7',
  },
  {
    id: 4,
    title: 'Kindergarten teacher',
    workTitle: 'Childcare & education',
    date: '2021-2023',
    description: 'Wide range of responsibilities surrounding childcare.',
  },
]);
//Volunteer array
const volunteerList = ref([
  {
    id: 1,
    title: 'Roskilde Festival',
    workTitle: 'Electronic booth',
  },
  {
    id: 2,
    title: 'Book Depot',
    workTitle: 'Organized books',
  },
  {
    id: 3,
    title: 'LGBTQ Esbjerg Pride',
    workTitle: 'Branding/website/SoMe',
  },
  {
    id: 4,
    title: 'Dance Teacher',
    workTitle: 'Ballroom dance teacher',
  },
  {
    id: 5,
    title: 'Freelance Event Baker',
    workTitle: 'Wedding/ Birthays ect.',
  },
]);
//Education Array
const educationList = ref([
  {
    id: 1,
    title: 'Efterskolen for Scenekunst',
    workTitle: 'Malling',
    date: '2015-2016',
  },
  {
    id: 2,
    title: 'International Baccalaureate',
    workTitle: 'Esbjerg Gymnasium',
    date: '2017-2022',
  },
  {
    id: 3,
    title: 'UC Syd Pædagoguddannelsen',
    workTitle: 'UC syd Esbjerg',
    date: '2023',
  },
  {
    id: 4,
    title: 'EASV Multimediadesign',
    workTitle: 'Esbjerg',
    date: '2023-2025',
  },
]);

const accordionItems = ref([
  {
    title: 'Experience',
    entries: experienceList.value,
    expanded: false,
  },
  {
    title: 'Volunteer',
    entries: volunteerList.value,
    expanded: false,
  },
  {
    title: 'Education',
    entries: educationList.value,
    expanded: false,
  },
]);

//Toggle functions
const toggleAccordion = (index) => {
  accordionItems.value.forEach((item, i) => {
    if (i === index) {
      // Toggle the state of the clicked accordion item
      item.expanded = !item.expanded;
    } else {
      // Close all other accordion items
      item.expanded = false;
    }
  });
};
</script>

<style scoped>

.absolute {
  display: flex;
  justify-content: center;
  align-items: start;
  min-width: 100%;
  
}

h1, h2{
  text-align: center;
}

.col-md-6 {
  width: 50%;
  padding: 10px;
}

.boxdecor {
  border: 5px solid #b0dceb;
  padding: 20px;
  border-radius: 20px;
  background-color: #f8f9fa;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.big-title {
  font-size: 24px;
  margin-bottom: 20px;
  color: #333;
}

.about-me {
  color: #666;
}

.short-text {
  margin-bottom: 20px;
  font-size: larger;
  font-weight:bolder;
}

.long-text {
  margin-bottom: 20px;
  font-weight: 400;
  font-size: medium;
  white-space: pre-line;
}

.read-more-btn {
  margin-top: 10px;
}



.accordion-container {
  padding: 10px;

}

.accordion-button {
  width: 100%;
  text-align: center;
  padding: 15px 20px;
  font-size: 18px;
  background-color:rgb(255, 233, 236);
  border: none;
  margin-bottom: 2px;
  transition: background-color 0.3s ease;
}

.accordion-button:hover {
  background-color: rgb(255, 233, 236);
}

.accordion-button.collapsed {
  background-color: #b0dceb;
}

.accordion-body {
  width: 100%;
  text-align: start;
  background-color: rgb(255, 233, 236);
  border-radius: 20px;
}

.accordion-body ul {
  list-style: none;
  padding: auto;
}

.accordion-body ul li {
  margin-bottom: 10px;

}


/* Media query for smaller screens */
@media (max-width: 768px) {
  .row {
    flex-direction: column; /* Stack the columns */
  }

  .col-md-6 {
    width: 100%; /* Make each column take full width */
  }
}

</style>
