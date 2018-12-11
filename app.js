require('./db/connection');

const express = require('express');
const createPostRoute = require('./routes/posts/createPost');
const getPostRoute = require('./routes/posts/getPosts');
const deletePostRoute = require('./routes/posts/deletePost');
const editPostRoute = require('./routes/posts/editPost');
const getCoursesRoute = require('./routes/courses/getCourses');
const createCoursesRoute = require('./routes/courses/createCourse');
const deleteCourseRoute = require('./routes/courses/deleteCourse');
const editCourseRoute = require('./routes/courses/editCourse');
const countPostRoute = require('./routes/posts/getPostCount');
const countCourseRoute = require('./routes/courses/getCourseCount');
const likePostRoute = require('./routes/posts/likePost');
const createUserRoute = require('./routes/user/users');
const loginRoute = require('./routes/user/login');



const app = express();
app.use(express.json());

app.use('/api/create-posts',createPostRoute);
app.use('/api/get-Posts',getPostRoute);
app.use('/api/delete-post',deletePostRoute);
app.use('/api/edit-post',editPostRoute);
app.use('/api/get-courses',getCoursesRoute);
app.use('/api/create-course',createCoursesRoute);
app.use('/api/delete-course',deleteCourseRoute);
app.use('/api/edit-course',editCourseRoute);
app.use('/api/count-post',countPostRoute);
app.use('/api/count-course',countCourseRoute);
app.use('/api/like-post',likePostRoute);
app.use('/api/create-user',createUserRoute);
app.use('/api/login',loginRoute);

const port = process.env.PORT || 3900;


app.listen(port,()=>{
  console.log(`server started on port ${port}`)
});




// var createError = require('http-errors');
// var express = require('express');
// var path = require('path');
// var cookieParser = require('cookie-parser');
// var logger = require('morgan');
//
// var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');
//
// var app = express();
//
// // view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'pug');
//
// app.use(logger('dev'));
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));
//
// app.use('/', indexRouter);
// app.use('/users', usersRouter);
//
// // catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
// });
//
// // error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};
//
//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });
//
// module.exports = app;
