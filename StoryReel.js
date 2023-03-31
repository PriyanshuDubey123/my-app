import { Avatar } from '@mui/material'
import React from 'react'
import './story.css'

function StoryReel() {
  return (
    <div className='Storyreel'>
        <div className="story" style={{backgroundImage:`url('https://s.w-x.co/in-wheat_4.jpg')`}}>
            <Avatar src='data:image/jpeg;base64,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'/>
            <h4>Hariya Singh</h4>
        </div>
        <div className="story" style={{backgroundImage:`url('https://upload.wikimedia.org/wikipedia/commons/4/41/India_Farming.jpg')`}}>
            <Avatar src='https://media.istockphoto.com/id/152943753/photo/indian-farmer.jpg?s=170667a&w=0&k=20&c=P-E2WkXVuo6OjJlvLs2eteRfiO4Ak-B8Lv2HZwPaWrU='/>
            <h4>Bhanu Patel</h4>
        </div>
        <div className="story" style={{backgroundImage:`url('https://www.theindiaforum.in/sites/default/files/field/image/2022/06/21/ramkumar-radhakrishnan-wikimedia-1622193304-1622193304.jpeg')`}}>
            <Avatar src='https://thumbs.dreamstime.com/b/smiling-indian-farmer-hot-sunny-day-holding-paddy-round-knife-sickle-agriculture-field-concept-bumper-crop-harvesting-203544354.jpg' />
            <h4>Moolchand</h4>
        </div>
        <div className="story" style={{backgroundImage:`url('https://researchleap.com/wp-content/uploads/2019/11/image_2019-11-14_13-57-27-e1573726312760.jpg')`}}>
            <Avatar src='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBISEhgVEhUYGBgYGBgYGBkYGBgYEhgZGBgZGRgYGhgcIS4lHB4rHxgYJjgmLC8xNTU1GiQ7QDs0Py40NTEBDAwMEA8QHhISHjErISs0NDQ0NDQ0NDQ0MTQ0NDQ0NDQ0NDQ0NDE0NDQ0NDQ0NDQ0NDQxNDQ0NDQ0NDQ0NDQ0NP/AABEIAMIBAwMBIgACEQEDEQH/xAAcAAACAgMBAQAAAAAAAAAAAAAAAQIDBAUGBwj/xAA/EAABAwIEAwUGAwYGAgMAAAABAAIRAyEEEjFBBVFhInGBkaEGEzKx0fBCUsEHFXLC4fEUIzNDYpIkglOisv/EABkBAQEBAQEBAAAAAAAAAAAAAAABAgQDBf/EACURAQADAAICAgIBBQAAAAAAAAABAhEDEiFRMUEEEzIUImGRof/aAAwDAQACEQMRAD8A7yE4UgE4Xu8EYRCnCIQVwiFOEQghCIU4RCIjCIU4RCKhCMqnCIQV5U4VkIhBXlRlVkJQghCIU4ThBCEQpwiEEIThThEIIgJwnCcIIwnCcIhAoRCcJwghCIUoRCi4hCIU4RChiEIU4SRUQE4TAThVkoRCcJKghEJwiEChEJwiEBCIThEIFCIThEIFCIThEIFCIUoRCCMIhShEJojCIUoRCCMIhShEIpQiE4ThQJEJpwi4jCIUoRCGIwnCcJwoYhCIUoRCiooThCCACcJohNTAlCkhUxGEQpQiFUwoRClCITTEYThOE4TRGEQpQiE0xGE4UoRCauIwiFKEQppiMIha3G8fwtHNnqDs/FlBdl78q4/2o/aMxgDMC5r3ES55Bhk/hDT+LnOnyauS9CRC8Tw/tljHuBdXfre7AO7YLrOEe2Ff/ch7efZc7bdmnkszeIaiky9AhELUYb2gw74BdkP/ACIieUz6GCtu0giRobhWLRPwk1mPkQiFJCuphIThOFAkJwiE1ShEIUlBGEQpJQgghSQggE0gpIYUJwhNNChEJoTTBCIThNXTEYThNCamFCcJoTVwoRCaE0woXnPt/wC17qdQ4TCuhwH+dUGrZ/22nY3udpjnHZ+0nFRhMJVxBiWMJaDoXnssHi4tXzm+q57jmLnOc4ue7dznGT8z5qTK1h0zKpq0yxoJbHZEwHO3ceTb66npotNieHuYJa0hw+KxDSDpAN/O91teBloOeo+GNGYhvxXNmtP5iYE8iF1mAwbaxL3sDAYytuTGxvzXLycvV28XD3ebYSWOzOfB5AA38QY8l13D6jKmUMfkeYjOC+nMWsWg+Xmt/ivY2nUJLSWnnErl+K+w1ekM7SY1kW8TusRz1t8+G5/Hmvx5bLGvxtP8FKo2DOUgGDqQJMCOqweF+2VbCVQIc1v4qbyfdeAuG94UeGcVexvuMcHuaP8ATqxmqU+hJgub42vB2VfE2wQHAPDicj/iziNM0APNxLTlI6iCfWlnjek/b2D2b4y3G0BWa3KC4tjNmEiJh0CdVtV5p+zri1T3rKGf/KyuystlB1BB2vaF6aveJctoyUVJCaqEmhCBJoQgEk0IIIUkKa0rCaiE00SQkmmgQhCrKSFFSlAJpJoBNJEoGkhCDif2tVQ3hjh+arTA8HF38q8TwrRmDddSe+L/AE8Oq9f/AGyv/wDDpN/NXn/rTf8AULyjC0YD3xpYeU/r6LF58PWkbLo+GYTM0OOxEDaBv6ldfwp5Dh4LRcIpzTA0sD/RbaniPduBMRMEG3iF8u8zaz7NIitMdTRfIH1hZbakiMo0j4pWowHEaRLrtywCLc9R4KynjqTiA4NBc5zZmG9kxP3zWEmNYXHuCU6glrQ08gOyfDZcp+46rSWNbY2LXAupu1iRyvtBEmCJIPfP4hSByjLnzZY0IA9NEmvDvh8f6rdbTWWbRFoyXE4DB1MHiKLoa4uqMDw0uBEvAySTLraXvp3+vLymu9/7ybTB+KowgHwdA+fgvVl9LjtM18vlc1Yi2QaEkL015mhJCaGhJEqaGkUpQSpphISlCaK5TlRBRKaJynKgCiU0WSiVCUSmiYKcqEolXTFkolQlEppiyUSoSiU0TlKVGUSpq44b9rdBlTBNdnAfTe17WSMz2nsOga2zB08mleS4APqvE2a2568vl6L0X9ojCcWJJj3bIE9XyuL4dTALwIu/0gfUrztf5h0V4siLe1lXirmwGODAJlx+I/wj6LT4nFve6Guc4kiBBkkm1jvcLrqHs017swjxifXZdHguAOZ+FhP5sgzed7Ll/ZSvxDs/Ve0eZx59wbG4gvFN7nNYXZHGO02dddDqu14vwP8A8RrqT3l9Ml7BuZibc91i4/DBrxYWN4AidB+q63hpzUdL/wBF5Xvs9ojHtWvWubryOpxHEuc57iTlMOI1G0RK33CeJg5T7wsdIglhDCQdCdNecLvX8FzOz03QTqNu9Xs4Vbt3++Qhb/ZExmPOaZO6o9nOHsfiv8S8dsMhgPN1nuHUNbHc4rsJXPcJptFbS4Y6OgLmz8gt9K6uG21cHPGXTlEqEoleuudOUSoZksyaqyUpUMyWZBZKRKhmSLlNEsyFCUlVQBUpVIcnmQWynmVOZGZBdmTzLWY3i1KiQ17rkSABJWupe1NMuAcxzQdz9Fmb1ic06y6XMjMsYVmxmkQYIO19FIVARIIjnt5q6i/MjMqGVAdCD3GVIvjVNF2ZGZY7K7XfC4HuIKnnTVW5kZlhv4hTa/IXgOMWPM6CdJ6K/MppjlP2g8O95SZWaLsJa8j8j5APg4//AGXnNBmUxEW8DO87r26tTa9pY8S1wLSOYIuvK+JcIqUXPztMMi9oylwDXDoSR5ryv866uK0TXJ+my4ZVaC0Hw+/JddSePdk9F55gKxD277LeY/i7WsLM0CIn0v0XJaJ131tE1YWJe2o97mmwMDqBqV1PAKjPdkHXZeY16j6ji2nUc1rj2soM+Y2suj4Ng6tLsurucDIb+YdzjclbmuQxF98O9oVAN/osqu8Bt+S4zhuKZhA5ri9weSQXuc50amC47ardsxgqU8wMxYdeS8p8E5LYcKZ2nv7m+kn5hbLMtJgcbTp0zndBzEx+LT+ivPF6cEzoBu2TI0F9e9dvFasVjy+dzbN5bPMjMtb+9aP5/QqLuMUfzz3A/qt96+4efWfTZ5kZlo6nG+0cjMzYsRMzFrRYSsV3H6gB7AJ/D2XBoG8mZO3JT9lfZ1n06WUSuYHtI4QHMaHby7LI6A6d6wKvH3irnNVoZNmB0i2uk+cKTy1WK29O2lLMuWHtGXNzNdTE6Zjlt0k3Sdx+oWgD3eYjX3gEjo0iyftqvSzqMyFxP78rD/cb5g+uVCftqdZbLEcbqA9inI3JP0UKftGXf7cRqXEjyssRhcPxeisbVd+Y+X1XJ/U2byqeI4xUcQ9nwdDfxKf74q1WlzRkaDGhzHuKqrHO0scTGkaKqhSFNsNLgJn4jup/UWT+1jYhjKhL3PdmNjp6brBp0KYPbeIGkgtd3Hnot4/I74mMcebmtcfUKIYwTDWif+I9OS8+8+1m1VeO4jTqsaHuaGt0AkDS0c7LH/xdEMy53ZZmMx8YCyxSYDIaJ5wJU4EzlE9w+ifst7lO1fTDw3EWU+0x5jbT+xWXX49mEGXAiCAbeMKZfeSBPOB9EAxfTe3Pn3p+y3uTtX0wmcRotObKAQdcxsQdzNtFefad8XtOlxtrEwrWuj7Ck4zrfvVi8x9z/s7V9MQccBIeRe0ExN+R1Oib/aCoTDWOJHMuEDdZQded+d580iOad59/9XvHphO4w9xvTeToZaeYtLhpKxsZi3vBZ7h4zjLmLIIuDJMbROq24bGyMnT0SJ86d4cMCWOA5af3WNxWhUc6QC4T2W9I16rccQdSdWfTYe003kQM0mQDzBBVLQbzqBZdE7E66qzFoYHDGOBgMAOkucB6Bddh8LUeGl7KeZskTWIbJiTEa6eS09DhvvLlwB6fqFtsNwZ5aO03WZymde9YtaJe1fEfCGNwlR5PYZI0h5ifJbDgjHBgzTJN+Uj+4WVSwfu29dx+qspuDHEyNbA841+SxM+Gb2iPMtVxN1b3hFNjSBo47xEjzzbbLCq/4mJDGzuLE+cRFmreuJJknndVh3ULGw4JvMy05p4qSYp9BeY/6orUMQWiI6xA257rb5hzHVJpGxTWe8tMMNii2M0Rocxv80zTxYcQHAt1Glrac4n7K25eOf6Sl73kQfvTvU7f4O0tbTbiAI7O5uc0dL/d0vd4gkS9oNwREjpC2gqJCqDcck7r3YNKjVAMuaSRqQYB7vJJuFqAQXNNt5I6ws1tVp8eibnC9vu6djtLXf4Op+f0hJZ+fofMIV7L2kwSndY7M03EeKk+nI1I7jGi8dYWgnn8kTHVQbTB66Xn6Jlg0V0J1VjLkwpsrA/D8kmDkB6Kx5DTrb581dgFz9hEnchVh4+9uWqYqN8kE5Gub5Jlw+yqS8G0WNtiO5P3nQclcTVweOSM9tI8P08FDNMaX6eaYfyI8/JaiE1LM47DySzO226a+Ky8Fw+vV+Cm8i0HRv8A2NluMN7LViQXua0b/id4AW9V614rT8Qa55jHuMCekc91s8BwypmDqlgL5fxGNO5dhguD0aIOVsk6uddx8dvCE8NRAOaNdJ5bLpp+PFfNh4N7R4V1LiVVpENeM46yb+oPmqvfPbY3G06jxXpn7TOBNfTbiWDtU3AP6sfDZ/7ZfVcQzAmo2WgnwTl8Tru4P7qpcOx1Mm7gD1sdBP6lbzDY8TZ4ttIMeq55vBHP2jnz8lteE8JY0y5uZ3MjTwXhaaveItDo6JDog39IV2G4WcVh8zB26dWq3YFzQ9wFzaRFp5lGGYKbHPdYAE+Qut17CCcEx8XeXvP/ALvc/wDmW+GsXmY+nP8AkeKuZxHC6tP/AFGObIgmJb5i0rEcy9j3zdepmQsHHcJo1vibDvzNs7x5+K3b8b1Li15xkBDtvv8Auh7WjtbCx9Pou+wXBsO2Wmmx38QzH1RiOA4YkD3QAO7S5seRWZ/Gn2PPoba8mfHuUH5TbkZXY4v2TpPE0nuDts8FoIm1gCNdbrlOI8PqUHkPBBm1rEHkdHBeN+C1fJqhpaANQJ07t7dyXZaSRa3nHTmqHVi3tbHkJg6X57X+ik+qBr3HzleM1ldXl46EGyiHg2LdN/QfRVAAyARBv1mZ1VbHkxPUQbzy++qzkjI94Bt6lCwTUP5o6QbIV6yayqTXBkuPa3jTwJVoJkjWdLarHcY1iB856qba+S8+X31WZVN5c0wRHyETPqmyYg3J5T4Kk1y4X3mLT1/RMVnaxHf48kFsfrp8PLklknYxtzvzUA7qesf1KmC0mZ+9Ne9A/dGCLR6Rz/RIeGvPfzTvpPhoZG3l1TLmxpM8vCysAzi/WFZlgb7TrbrCxHUnufla0mcrQGhxJk+F/qvQfZz2e9z260OeYgahn6Zvkurj4Zsy1nDPZZ9RgdUcWNN4iahHyb69y6nCcJoUgA1jSfzOAc8+JWeoMOo5H+q7a8da/EImhCRXoKqnaEc7eG/oPVBCG3v5LG4hi/dAHKXEmABp4nZZmWoX4zCtq0303CWva5p7nCF5Rg2PoVHUniCx5YeVtx8/Fej4fi4iagid2gkNvAB+vVar2h4W2u016JDnQM2W5OUdl0DeLEco5Ly5q9q7Do/Hv0tk/EtM+i1pzbEK2h7sFRoVGuptDyORuPNY2OikLQZ5X+S4Os7jv7R7L2nxBZhXBnxP7AA1M6/TxXaey2G9zhadI6sY1p6wBdcnwjAuxtVjzanSM3vmfrJ/h7J8uq7s4UZS24kQSNY37l28FZrHlwfkXiZxkNeCJBBHMXCktNQ4MaZJpVHN6RY940PktjQNTL28pPSW+O66Nc0x6Nlnmd1Nwkg8kPbcFD+iCNNuvelicOyowse0OaRcH7seqnTCm4wEgl5zx72f9w//AC2uLHdoHVwN5aXdLEErRPpNB8ZvqT6Exe3RevOZLI6eq5/2j4ZTfRNSIfTE5haTIGU8+/Zc3JwROzCw87exodnDokxraZvvbSEhUDrSA4i4MxMRr5KWIpSMxkAWOotPxCNCPJV+7A7cgy3Ui9gbTHX1XHNRVVdc5mid+yD6whRNJ7rwdByOgjWEK4uMtjNzr8IPIamdtVW1jC7NBO2p2US15ibA8iI8eavYIEGLWmLE3OmwsVzyLARI7zvc9Uo1cDtEm8QeQ+7qDqYjmdANvAfr3qgU3zObW0W6QLaDx81IgZbXGRsIjXXusnpYO075+5sqS5up6giNxfcfNMi0gXH/ACk35TvstRAHCQdLy3efOeoVzWPbftciIBt0MfVVMf2YOUkGJte+h2BV5rAABwNx69/3ovSujq/Ymi1z3PtLWgN6Fx7XjaPErtVx3sjh8tBzwT8cSIJDQ0X83eS69ptf00K+nwxlYZlJVj4j3A+pViW/gf0XqhqDmyCFNLdAg1KpTa4QRKmhMGBU4ew2vB+q19bAmg7OwnLe2hA5ffJb5wSc0OEESCs41FpcXxvA54rU2/xlsDtSTLgNCQdVgtw7nNDG/E8hg0tOp7gJP/qV178I6m4uZdp+IG+uxG4WJgOFBtcPB7Aa4Bp+JrnETfcQI8T45mvluLeGx4RgGUKbWMEACBzjr1OpWehC9HlIKTU0BAkEJoQVUjr3qwqpxgeKm90NJiYExzhSFlFxnsjXfoFMsERsqsPpfU3Per0gcT7W8LFL/Ppthps9oHZDtn9J36xuVxuOw+aHMkDWRbxIMW2XsdRjXgtcA4EQ4G4IOxXJ8Y9mhGbDEgtM5HGWuG4Djp4lc/LxbPaFh5RUxBBIynX87Rrf/wCRJdDi6DGPc14LXA3EOEE3/KhePn00oxMQ0zYROkSI1JKBiLTcSTYjSN72i2qjVbmGU6wY5tERO55xoqmMvJMAtyA2+HcyNzAuuPIwZZIdoT1nyKjSdlJJnUW1nSDJv49NlKgCWm0zYgeUTvumwg2aZINwLTyGnPyUjwT8oueG3JtoJmBJ1Njfy1Ck1on4gYnlrtMSZiFjuY51oJA1LTFzaAd9ryriG02g5hlNtzobwQTeZWoTGHUxJBdl3PjbotrwqmcQ9jGXc45SLQWkAHMDcQN+hXN52ue4M0knWL+S9L/Z5gRTpGvUHafIp2uGfidPU+jeq66cW5DziZ11nB8I2lRaxugnxM3J71kU+wcp0/Cf5e9U4bEgCDsrX12kQQV3ZjTICRcLLGZitiO481VUfcHk6fAmPv8AqqNgFF2oWOx0QmaxkeCgyUKDaghSBVQ0gmkgHaKirTjtN1HqsghRj9FJWDaZCaixsCOSkqgQhCAQhCDHxKuboqcSraWiz9r9KMM8ZcxOqjVxB2t1WIyrAt/S1kmOLnXP33KrjZ0GQFjY0QZ2OvesgOhqoxrwGGd1NGH77v8ARC17qqFcNeet+E+PyKwceYY+LdgaW3YhC+LX+TTOZr4K5nxD+L+YoQs2JVM+M9/8rlp+O2gCwjw2Qhe3H8wl/hqOFf6g8fkV7tgBFFgFhkZ3fAEIX0uP+UvKGU3X75qZ/T9ChC9lN2iji/gPgmhRqGTsPvmh2vihCgk7TwHzSpaeaEIMtqAhCqGojRCEEghCEAhCEAhCEGPidu/9FOhoO5CFn7a+mi/P/G//APZVeHPbHehCjTeu+Ed36LX443P3ySQkfKT8NQUIQvVh/9k='/>
            <h4>Sharad Dubey</h4>
        </div>
        <div className="story" style={{backgroundImage:`url('https://assets.weforum.org/article/image/NB5Ihe8npab9UcDRwST93eF-NddHtD_XyFsWifjWL7g.jpg')`}}>
            <Avatar src='https://www.kisanofindia.com/wp-content/uploads/2020/11/Kisan-credit-card.jpg' />
            <h4>Tinu Lodhi</h4>
        </div>
    </div>
  )
}

export default StoryReel