import pageTitle from 'ember-page-title/helpers/page-title';
import Old from '@ember/component';
import Component from '@glimmer/component';

class Foo extends Old {
  <template>
  hi
  </template>;
}

<template>
  {{pageTitle "Ember68FastbootCleanupReproduction"}}

  <Foo />
</template>
